let sm = [{
    "name": "Revenue",
    "description": "This semantic model allows users to analyze daily revenue, Cost of Goods Sold (COGS), forecasted revenue, and profit by products and regions. Users can explore metrics such as total revenue for a specific day and profit by product line.",
    "tables": [
        {
            "name": "daily_revenue",
            "description": "Daily total revenue, aligned with daily \"Cost of Goods Sold\" (COGS), and forecasted revenue.",
            "base_table": {
                "database": "cortex_analyst_demo",
                "schema": "revenue_timeseries",
                "table": "daily_revenue"
            },
            "time_dimensions": [
                {
                    "name": "date",
                    "expr": "date",
                    "description": "date with measures of revenue, COGS, and forecasted revenue.",
                    "unique": true,
                    "data_type": "date"
                }
            ],
            "measures": [
                {
                    "name": "daily_revenue",
                    "expr": "revenue",
                    "description": "total revenue for the given day",
                    "synonyms": [
                        "sales",
                        "income"
                    ],
                    "default_aggregation": "sum",
                    "data_type": "number"
                },
                {
                    "name": "daily_cogs",
                    "expr": "cogs",
                    "description": "total cost of goods sold for the given day",
                    "synonyms": [
                        "cost",
                        "expenditures"
                    ],
                    "default_aggregation": "sum",
                    "data_type": "number"
                },
                {
                    "name": "daily_forecasted_revenue",
                    "expr": "forecasted_revenue",
                    "description": "total forecasted revenue for a given day",
                    "synonyms": [
                        "forecasted sales",
                        "forecasted income"
                    ],
                    "default_aggregation": "sum",
                    "data_type": "number"
                },
                {
                    "name": "daily_profit",
                    "description": "profit is the difference between revenue and expenses.",
                    "expr": "revenue - cogs",
                    "data_type": "number"
                },
                {
                    "name": "daily_forecast_abs_error",
                    "synonyms": [
                        "absolute error",
                        "L1"
                    ],
                    "description": "absolute error between forecasted and actual revenue",
                    "expr": "abs(forecasted_revenue - revenue)",
                    "data_type": "number",
                    "default_aggregation": "avg"
                }
            ]
        },
        {
            "name": "daily_revenue_by_product_line",
            "description": "Daily revenue sliced by product line, aligned with daily \"Cost of Goods Sold\" (COGS), and forecasted revenue.",
            "base_table": {
                "database": "cortex_analyst_demo",
                "schema": "revenue_timeseries",
                "table": "daily_revenue_by_product"
            },
            "time_dimensions": [
                {
                    "name": "date",
                    "expr": "date",
                    "description": "date with measures of revenue, COGS, and forecasted revenue for each product line",
                    "unique": false,
                    "data_type": "date"
                }
            ],
            "dimensions": [
                {
                    "name": "product_line",
                    "expr": "product_line",
                    "description": "product line associated with it's own slice of revenue",
                    "unique": false,
                    "data_type": "varchar",
                    "sample_values": [
                        "Electronics",
                        "Clothing",
                        "Home Appliances",
                        "Toys",
                        "Books"
                    ]
                }
            ],
            "measures": [
                {
                    "name": "daily_revenue_per_product_line",
                    "expr": "revenue",
                    "description": "revenue associated with a given product line for the given day",
                    "synonyms": [
                        "sales",
                        "income"
                    ],
                    "default_aggregation": "sum",
                    "data_type": "number"
                },
                {
                    "name": "daily_cogs_per_product_line",
                    "expr": "cogs",
                    "description": "cost of goods sold associated with a given product line for the given day",
                    "synonyms": [
                        "cost",
                        "expenditures"
                    ],
                    "default_aggregation": "sum",
                    "data_type": "number"
                },
                {
                    "name": "daily_forecasted_revenue_per_product_line",
                    "expr": "forecasted_revenue",
                    "description": "total forecasted revenue associated with a given product line for the given day",
                    "synonyms": [
                        "forecasted sales",
                        "forecasted income"
                    ],
                    "default_aggregation": "sum",
                    "data_type": "number"
                },
                {
                    "name": "daily_profit_per_product_line",
                    "description": "profit is the difference between revenue and expenses.",
                    "expr": "revenue - cogs",
                    "data_type": "number"
                },
                {
                    "name": "daily_forecast_abs_error_per_product_line",
                    "synonyms": [
                        "absolute error",
                        "L1"
                    ],
                    "description": "absolute error between forecasted and actual revenue",
                    "expr": "abs(forecasted_revenue - revenue)",
                    "data_type": "number",
                    "default_aggregation": "avg"
                }
            ]
            },
            {
            "name": "daily_revenue_by_region",
            "description": "Daily revenue sliced by region, aligned with daily \"Cost of Goods Sold\" (COGS), and forecasted revenue.",
            "base_table": {
                "database": "cortex_analyst_demo",
                "schema": "revenue_timeseries",
                "table": "daily_revenue_by_region"
            },
            "time_dimensions": [
                {
                    "name": "date",
                    "expr": "date",
                    "description": "date with measures of revenue, COGS, and forecasted revenue for each region",
                    "unique": false,
                    "data_type": "date"
                }
            ],
            "dimensions": [
                {
                    "name": "sales_region",
                    "expr": "sales_region",
                    "description": "region associated with it's own slice of revenue",
                    "unique": false,
                    "data_type": "varchar",
                    "sample_values": [
                        "North America",
                        "Europe",
                        "Asia",
                        "South America",
                        "Africa"
                    ]
                }
            ],
            "measures": [
                {
                    "name": "daily_revenue_per_sales_region",
                    "expr": "revenue",
                    "description": "revenue associated with a given region for the given day",
                    "synonyms": [
                        "sales",
                        "income"
                    ],
                    "default_aggregation": "sum",
                    "data_type": "number"
                },
                {
                    "name": "daily_cogs_per_sales_region",
                    "expr": "cogs",
                    "description": "cost of goods sold associated with a given region for the given day",
                    "synonyms": [
                        "cost",
                        "expenditures"
                    ],
                    "default_aggregation": "sum",
                    "data_type": "number"
                },
                {
                    "name": "daily_forecasted_revenue_per_sales_region",
                    "expr": "forecasted_revenue",
                    "description": "total forecasted revenue associated with a given region for the given day",
                    "synonyms": [
                        "forecasted sales",
                        "forecasted income"
                    ],
                    "default_aggregation": "sum",
                    "data_type": "number"
                },
                {
                    "name": "daily_profit_per_sales_region",
                    "description": "profit is the difference between revenue and expenses.",
                    "expr": "revenue - cogs",
                    "data_type": "number"
                },
                {
                    "name": "daily_forecast_abs_error_per_sales_region",
                    "synonyms": [
                        "absolute error",
                        "L1"
                    ],
                    "description": "absolute error between forecasted and actual revenue",
                    "expr": "abs(forecasted_revenue - revenue)",
                    "data_type": "number",
                    "default_aggregation": "avg"
                }
            ]
        }
    ],
    "verified_queries": [
        {
            "name": "daily cumulative expenses in 2023 dec",
            "question": "daily cumulative expenses in 2023 dec",
            "verified_at": 1714752498,
            "verified_by": "renee",
            "sql": 
`SELECT DATE
  ,SUM(daily_cogs) OVER (
    ORDER BY DATE ROWS BETWEEN UNBOUNDED PRECEDING
    AND CURRENT ROW
  ) AS cumulative_cogs
FROM __daily_revenue
WHERE DATE BETWEEN '2023-12-01'
  AND '2023-12-31'
ORDER BY DATE DESC;`
        },
        {
            "name": "lowest revenue each month",
            "question": "For each month, what was the lowest daily revenue and on what date did that lowest revenue occur?",
            "verified_at": 1715187400,
            "verified_by": "renee",
            "sql": 
`WITH monthly_min_revenue
AS (
  SELECT DATE_TRUNC('MONTH', DATE) AS month
    ,MIN(daily_revenue) AS min_revenue
  FROM __daily_revenue
  GROUP BY DATE_TRUNC('MONTH', DATE)
)
SELECT mmr.month
  ,mmr.min_revenue
  ,dr.DATE AS min_revenue_date
FROM monthly_min_revenue AS mmr
INNER JOIN __daily_revenue AS dr ON mmr.month = DATE_TRUNC('MONTH', dr.DATE)
  AND mmr.min_revenue = dr.daily_revenue
ORDER BY mmr.month DESC NULLS LAST`
        },
    ],
    "sample_questions": [
        ""
    ]
}];