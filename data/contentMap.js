const contentMap = {
  'jewellery-mfg': {
    title: 'Jewellery Manufacturing',
    industries: [
      { name: 'Diamond Jewellery Manufacturing', url: '/jewellery-mfg/industries/diamond-jewellery-manufacturing' },
      { name: 'Gold Jewellery Manufacturing', url: '/jewellery-mfg/industries/gold-jewellery-manufacturing' },
      { name: 'Handmade Jewellery', url: '/jewellery-mfg/industries/handmade-jewellery' },
      { name: 'CZ Manufacturing', url: '/jewellery-mfg/industries/cz-manufacturing' },
      { name: 'Kundan/Jadau Manufacturing', url: '/jewellery-mfg/industries/kundan-jadau-manufacturing' },
      { name: 'Bangles Manufacturing', url: '/jewellery-mfg/industries/bangles-manufacturing' },
    ],
    solutions: [
      { name: 'Product Development', url: '/jewellery-mfg/solutions/product-development' },
      { name: 'Automate Entry Process', url: '/jewellery-mfg/solutions/automate-entry-process' },
      { name: 'Real-Time Loss & Recovery Control', url: '/jewellery-mfg/solutions/real-time-loss-recovery-control' },
      { name: 'Inventory Tracking', url: '/jewellery-mfg/solutions/inventory-tracking' },
      { name: 'Product Making Guide for workers', url: '/jewellery-mfg/solutions/product-making-guide-for-workers' },
      { name: 'AI Based Stock Search', url: '/jewellery-mfg/solutions/ai-based-stock-search' },
    ],
    features: [
      { name: 'Inventory Management', url: '/jewellery-mfg/features/inventory-management' },
      { name: 'Production process & Loss Management', url: '/jewellery-mfg/features/production-process-loss-management' },
      { name: 'Orders & Repair Management', url: '/jewellery-mfg/features/orders-repair-management' },
      { name: 'Accounts & Payments', url: '/jewellery-mfg/features/accounts-payments' },
      { name: 'Sales & Billing', url: '/jewellery-mfg/features/sales-billing' },
      { name: 'Analytics & Dashboards', url: '/jewellery-mfg/features/analytics-dashboards' },
    ]
  },
  'jewellery-wholesale': {
    title: 'Wholesale',
    industries: [
      { name: 'Jewellery Distributors', url: '/jewellery-wholesale/industries/jewellery-distributors' },
      { name: 'Domestic/International Wholesalers', url: '/jewellery-wholesale/industries/domestic-international-wholesalers' },
      { name: 'Multi-Branch Wholesalers', url: '/jewellery-wholesale/industries/multi-branch-wholesalers' },
    ],
    solutions: [
      { name: 'Vendor Management', url: '/jewellery-wholesale/solutions/vendor-management' },
      { name: 'Order & Re-Order Management', url: '/jewellery-wholesale/solutions/order-reorder-management' },
      { name: 'Real-Time Pricing Control', url: '/jewellery-wholesale/solutions/real-time-pricing-control' },
      { name: 'Multi-Branch & Cloud Sync', url: '/jewellery-wholesale/solutions/multi-branch-cloud-sync' },
      { name: 'Repair Management', url: '/jewellery-wholesale/solutions/repair-management' },
      { name: 'Advance Analytical Reports', url: '/jewellery-wholesale/solutions/advance-analytical-reports' },
    ],
    features: [
      { name: 'Inventory Management', url: '/jewellery-wholesale/features/inventory-management' },
      { name: 'Sales & Billing with scanning', url: '/jewellery-wholesale/features/sales-billing-scanning' },
      { name: 'Approval Memo & Reconciliation', url: '/jewellery-wholesale/features/approval-memo-reconciliation' },
      { name: 'Accounts & Payments', url: '/jewellery-wholesale/features/accounts-payments' },
      { name: 'Customer Relationship Management (CRM)', url: '/jewellery-wholesale/features/customer-relationship-management-crm' },
    ]
  },
  'jewellery-retail': {
    title: 'Retail',
    industries: [
      { name: 'Jewellery Retail Stores', url: '/jewellery-retail/industries/jewellery-retail-stores' },
      { name: 'Multi-Location Chains', url: '/jewellery-retail/industries/multi-location-chains' },
      { name: 'Franchise Showrooms', url: '/jewellery-retail/industries/franchise-showrooms' },
      { name: 'Boutique Jewellery Brands', url: '/jewellery-retail/industries/boutique-jewellery-brands' },
    ],
    solutions: [
      { name: 'POS Billing & Barcode Scanning', url: '/jewellery-retail/solutions/pos-billing-barcode-scanning' },
      { name: 'Orders & Vendor Management', url: '/jewellery-retail/solutions/orders-vendor-management' },
      { name: 'Repair & Old Gold Management', url: '/jewellery-retail/solutions/repair-old-gold-management' },
      { name: 'Business Analytics', url: '/jewellery-retail/solutions/business-analytics' },
      { name: 'Schemes & Loyalty Program', url: '/jewellery-retail/solutions/schemes-loyalty-program' },
    ],
    features: [
      { name: 'Inventory Management', url: '/jewellery-retail/features/inventory-management' },
      { name: 'Customer Relationship Management (CRM)', url: '/jewellery-retail/features/customer-relationship-management-crm' },
      { name: 'Accounts & Payments', url: '/jewellery-retail/features/accounts-payments' },
      { name: 'Sales & Billing with Scanning', url: '/jewellery-retail/features/sales-billing-scanning' },
      { name: 'Approval Memo & Reconciliation', url: '/jewellery-retail/features/approval-memo-reconciliation' },
    ]
  },
  'apps-&-ecommerce': {
    title: 'Apps & Ecommerce',
    industries: [
      { name: 'Jewellery Manufacturing', url: '/apps-&-ecommerce/industries/jewellery-manufacturing' },
      { name: 'Jewellery Wholesalers', url: '/apps-&-ecommerce/industries/jewellery-wholesalers' },
      { name: 'Jewellery Retailers', url: '/apps-&-ecommerce/industries/jewellery-retailers' },
    ],
    solutions: [
      { name: 'Real time Connected B2B Ecommerce', url: '/apps-&-ecommerce/e-commerce/real-time-connected-b2b-ecommerce' },
      { name: 'Real time Connected B2C Ecommerce', url: '/apps-&-ecommerce/e-commerce/real-time-connected-b2c-ecommerce' },
      { name: 'Omnichannel Ecommerce', url: '/apps-&-ecommerce/e-commerce/omnichannel-ecommerce' },
    ],
    features: [
      { name: 'Sales Team Mobile App (Optigo Express)', url: '/apps-&-ecommerce/apps/sales-team-mobile-app' },
      { name: 'Exhibition & Sales team tablet App (Icatalog)', url: '/apps-&-ecommerce/apps/exhibition-sales-team-tablet-app' },
      { name: 'B2B & B2C Catalog Sharing (ProCatalog)', url: '/apps-&-ecommerce/apps/b2b-b2c-catalog-sharing' },
      { name: 'Show Room App (EVO)', url: '/apps-&-ecommerce/apps/show-room-app' },
      { name: 'Showroom Advertising App (Sinage App)', url: '/apps-&-ecommerce/apps/showroom-advertising-app' },
      { name: 'Vendor Customer integrations (SCAVU)', url: '/apps-&-ecommerce/apps/vendor-customer-integrations' },
      { name: 'Management App', url: '/apps-&-ecommerce/apps/management-app' },
      { name: 'Sales Representative App', url: '/apps-&-ecommerce/apps/sales-representative-app' },
      { name: 'B2B Customer APP', url: '/apps-&-ecommerce/apps/b2b-customer-app' },
      { name: 'B2C Customer APP', url: '/apps-&-ecommerce/apps/b2c-customer-app' },
    ]
  }
};

export default contentMap;
