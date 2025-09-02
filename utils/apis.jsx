"use client";

import _ from "lodash";

/**
 * ApiService - Handles all API interactions related to email templates,
 * file operations, email sending, and dynamic payload-based backend operations.
 */
class Apis {
    constructor() {
        this.baseUrl = "/api/report";          // Main API endpoint for report-related operations

        this.currentMode = "";                 // Mode identifier for backend operations
        this.currentDescription = "";          // Description of the operation
    }

    /**
     * Sets a new base URL for the API.
     * @param {string} baseUrl - The new base URL.
     */
    setBaseUrl(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
     * Sets the current mode used in API operations.
     * @param {string} mode - Mode string (e.g., 'create', 'update').
     */
    setBaseMode(mode) {
        this.currentMode = mode;
    }

    /**
     * Sets the description of the operation.
     * @param {string} desc - Operation description.
     */
    setBaseDesc(desc) {
        this.currentDescription = desc;
    }

    /**
     * Parses and validates the API response.
     * @param {Response} response - The fetch response object.
     * @returns {Promise<Object>} - Standardized success or error object.
     */
    async parseResponse(response) {
        if (!response.ok) {
            return this.buildError("400", `HTTP Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const status = data?.Status || "400";
        const result = data?.Data?.rd?.[0] || {};

        if (status !== "200") {
            return this.buildError(status, `API Error: ${data.Message || "Unknown error"}`);
        }

        if (result?.stat === 0) {
            return this.buildError(status, result.stat_msg || "Operation failed");
        }

        return {
            status,
            success: true,
            data: data.Data,
            message: result.stat_msg || "",
        };
    }

    /**
     * Constructs a standardized error object.
     * @param {string} status - HTTP or API status code.
     * @param {string} message - Error message.
     * @returns {Object} - Error object.
     */
    buildError(status, message) {
        return {
            status,
            success: false,
            message,
        };
    }

    /**
     * Sends a POST request to the report API with headers and JSON body.
     * @param {Object} headers - Request headers.
     * @param {Object} body - Request body payload.
     * @returns {Promise<Object>} - Standardized API response.
     */
    async sendRequest(headers, body) {
        try {
            const response = await fetch(`http://newnextjs.web${this.baseUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    YearCode: headers?.yearcode || "",
                    sv: headers?.sv || "",
                    sp: headers?.sp || "",
                    version: headers?.version || "",
                },
                body: JSON.stringify(body),
            });

            return await this.parseResponse(response);
        } catch (error) {
            console.error("Request Error:", error);
            return this.buildError("500", error.message);
        }
    }

    /**
     * Generates a dynamic request payload used for backend operations.
     * @param {string} mode - Backend operation mode.
     * @param {string} description - Operation description.
     * @param {Object} data - Optional additional data.
     * @returns {Object} - Formatted payload.
     */
    generatePayload(mode, description, data = {}) {
        return {
            con: JSON.stringify({
                id: "",
                mode,
                appuserid: "admin@hs.com",
            }),
            p: Object.keys(data).length > 0 ? JSON.stringify(data) : "",
            f: description,
        };
    }

    /**
     * Executes an API request using the current mode and description.
     * @param {Object} headers - Request headers.
     * @param {Object} body - Optional request payload.
     * @returns {Promise<Object>} - Standardized response.
     */
    executeApi(headers, body = {}) {
        if (_.isEmpty(this.currentMode) || _.isEmpty(this.currentDescription)) {
            return this.buildError("404", "Invalid Operation: Mode or Description missing");
        }

        return this.sendRequest(headers, this.generatePayload(this.currentMode, this.currentDescription, body));
    }
}

// Export a singleton instance for use across the app
export const ApiService = new Apis();
