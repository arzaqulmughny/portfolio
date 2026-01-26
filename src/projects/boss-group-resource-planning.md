---
title: "BOSS Group Resource Planning – ERP System"
description: "An internal ERP system to standardize SOPs and integrate cross-division business processes."
author: "PT Xeno Persada Teknologi"
category: "company"
date: "2023-02-14"
bannerUrl: "/images/projects/boss-group-resource-planning/nda-brp.png"
tags:
  - laravel
  - bootstrap
  - jquery
---

## Project Overview
- **Project Name**: BOSS Group Resource Planning (BRP)  
- **Company**: PT Sinar Bintang Mulia  
- **Application Type**: Enterprise Resource Planning (ERP)  
- **Launch Period**: July 2025  
- **Developed By**: PT Xeno Persada Teknologi  
- **Industry**: Industrial & Trading  
- **Role**: Web Developer  
- **Live**: ****

## Background & Problem
The company aimed to standardize and enforce better internal Standard Operating Procedures (SOPs) across multiple divisions. Existing processes were partially manual and inconsistent between departments.  
The ERP system was designed to be used by various divisions, including Sales, Purchasing, Procurement, Warehouse, General Affairs, and Finance, to ensure consistent workflows and data accuracy.

## Project Goals
- Build an ERP system that enforces company SOPs  
- Support and improve existing business processes  
- Integrate seamlessly with the existing Warehouse Management System (WMS)  
- Ensure stable and reliable system performance for daily operations  

## Solution & System Concept
- Centralized ERP system with modular architecture per department  
- SOP-driven workflows to ensure consistent business processes  
- Document tracking across modules (e.g., Sales → Purchasing → Warehouse → Finance)  
- Integration with external WMS to synchronize stock movements and warehouse transactions  
- Role-based access control to align features with each division’s responsibilities  

## Features
- User authentication and role-based authorization  
- **Sales Module**: quotation, purchase request, invoice  
- **Purchasing Module**: purchase order, goods receiving, accounts payable  
- **Procurement Module**  
- Reporting and management dashboard  

## Technology Stack
- **Backend**: PHP with Laravel Framework  
- **Frontend**: Blade Template, Bootstrap, jQuery  
- **Database**: PostgreSQL  

## Challenges & Solutions
- **Challenge**: Collaborating with multiple developers in a monolithic application  
  **Solution**: Wrote reusable and well-structured code with clear conventions to ensure maintainability and ease of understanding for other developers.  

- **Challenge**: Integration with an external Warehouse Management System (WMS)  
  **Solution**: Learned the warehouse team’s operational workflow and carefully studied the WMS API documentation to fully understand the integration flow before implementation.  

- **Challenge**: Heavy processing during large data export operations  
  **Solution**: Implemented background processing to prevent the main application flow from being blocked.  

## Results
- Reusable and maintainable codebase  
- Data export processes that do not disrupt system performance  
- Well-established Git flow and collaboration process  

## Lessons Learned & Improvements
- This project involved stakeholders from multiple business domains, requiring thorough discussions before implementation.  
- I gained experience collaborating with cross-functional teams and helped guide the development team to follow agreed coding standards and best practices.  