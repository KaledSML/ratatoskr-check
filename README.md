# Ratatoskr Check 🐿️

**A local-first audit management and cybersecurity assessment tool.**

Ratatoskr Check is an application designed to help organize, manage, and document cybersecurity audits through structured assessments, scope management, auditor comments, and reporting.

Initially focused on the **NIST Cybersecurity Framework (CSF) 2.0**, the project aims to evolve into a flexible platform capable of supporting multiple audits and cybersecurity frameworks.

## The Story Behind Ratatoskr Check

Ratatoskr Check started as a small personal project during my journey into cybersecurity.

After an internship involving internal audits and NERC CIP, I wanted to create something to help organize audit activities. At first, it was just a simple NIST checklist built with HTML, CSS, and JavaScript. Nothing too ambitious.

I chose NIST CSF 2.0 as the starting point partly because I kept seeing it mentioned in cybersecurity job postings, while NERC CIP was more specific to the energy sector and its OT environments.

As the idea evolved, so did the project. What started as a checklist gradually became an attempt to organize audit information, track progress, and generate reports that make results easier to understand and communicate.

And well, here we are.

## Project Goals

Ratatoskr Check aims to:

- **Organize audit activities:** Keep audit information, assessments, scope, and auditor comments in one place.
- **Manage multiple audits:** Support independent audits with different scopes and assessment requirements.
- **Support different frameworks:** Start with NIST CSF 2.0 while keeping the project open to additional cybersecurity and compliance frameworks.
- **Improve visibility:** Make audit progress and results easier to understand through visual dashboards and structured reports.
- **Simplify reporting:** Generate general and detailed PDF reports, as well as editable Excel checklists.
- **Prioritize local control:** Keep audit information under the user's control, without requiring centralized infrastructure.

## Current Status

Ratatoskr Check is currently in its initial planning and design stage.

The project is being developed incrementally, with a focus on establishing a solid foundation before implementing its core features.

### Development Progress

- [x] Initial project concept and goals defined
- [x] Initial project scope established
- [ ] Architecture and technology stack
- [ ] Core audit data model
- [ ] Audit management functionality
- [ ] NIST CSF 2.0 assessment workflow
- [ ] Local data persistence
- [ ] Offline functionality
- [ ] Session import and export
- [ ] Encrypted session files
- [ ] General PDF report generation
- [ ] Detailed PDF report generation
- [ ] Editable Excel checklist generation
- [ ] Automated testing
- [ ] Security review

## Project Philosophy

Ratatoskr Check follows a **local-first approach**.

Audit information should remain under the user's control. The application is intended to work locally, without requiring accounts, centralized servers, or cloud services for its core functionality.

Offline operation is an important part of this approach, allowing users to continue managing their audits without an active internet connection.

This is particularly relevant when handling audit information, observations, and technical details that may contain sensitive information.

The goal is to keep the application useful, self-contained, and independent of external infrastructure.

## Three Ways to Work with Audit Information

Ratatoskr Check uses a single source of audit data to provide three complementary ways of working with and sharing assessment information.

### 1. The Application

The main workspace for configuring audits, defining their scope, evaluating controls, recording auditor comments, tracking progress, and managing assessment information.

### 2. PDF Reports

Two report formats serve different audiences and purposes:

- **General Report:** An overview of audit progress, assessment results, and relevant observations, designed to communicate the overall situation clearly.
- **Detailed Report:** A comprehensive breakdown of evaluated controls, assessment statuses, auditor comments, and relevant details.

### 3. Excel Checklist

An editable spreadsheet containing the assessment information available in the application. It provides a familiar format for reviewing, sharing, and working with audit data.

The goal is to keep all three outputs consistent while allowing information to be presented in different ways.

## Architecture & Data Management

Ratatoskr Check is designed to manage multiple independent audits through a centralized dashboard.

Each audit is created using a predefined framework structure included in the application. Users select the framework they want to assess and configure the scope of their individual audits by selecting which controls are applicable.

The original framework structure remains unchanged. Scope adjustments only affect the individual audit.

Controls excluded from the audit scope are hidden from the assessment workspace and progress calculations, but remain available for future scope adjustments.

Each audit maintains its own assessment data, including its scope, evaluation statuses, and auditor comments.

The application is intended to use automatic local persistence to maintain audit data independently. Session import and export will provide a way to transfer or back up individual audits.

Exported session files are intended to be protected through password-based encryption, helping safeguard audit information when files are transferred or stored externally.

## Technology Direction

Ratatoskr Check will initially be developed as a local-first web application, using browser-based technologies to provide a cross-platform experience without requiring a centralized server.

The application is intended to support offline operation, allowing users to manage audits and generate reports without an active internet connection.

A Progressive Web App (PWA) approach will be explored to enable installation on desktop devices while retaining access through a standard web browser.

The architecture will prioritize modularity and separation of concerns, keeping the core audit logic independent from the user interface where practical.

A native desktop distribution may be considered in the future if additional operating system integration becomes necessary.
