# Ratatoskr Check: Application Architecture

**Status:** Conceptual draft

## 1. Purpose

This document describes the main application responsibilities and use cases of Ratatoskr Check.

It outlines how the application coordinates user actions, domain rules, and infrastructure services without tying the design to a specific technical implementation.

## 2. Architectural Overview

Ratatoskr Check follows a layered architectural approach:

- **Domain:** Contains the core concepts and business rules related to frameworks, audits, scope, and assessments.
- **Application:** Coordinates use cases and interactions between the domain and infrastructure.
- **Infrastructure:** Provides technical implementations for persistence, file handling, encryption, and other external capabilities.
- **Presentation:** Handles the user interface, including dashboards, forms, reports, and assessment boards.

The Application layer coordinates operations without directly depending on specific infrastructure implementations.

## 3. Use Cases

### 3.1. Audit Management

**Create Audit**
- Create a new independent audit.
- Collect audit metadata, including audit name, selected framework, responsible auditor, auditee or organization, and date.
- Configure the initial audit scope.
- Initialize the audit using the selected framework structure.
- Make the new audit available in its dashboard.

**Import Audit**
- Allow the user to select an exported `.ratatoskr` session file.
- Request the password required to decrypt the file.
- Verify the file format, decrypt its contents, and validate the recovered audit data.
- Restore the audit and its associated information.
- Handle import errors, including invalid passwords, corrupted files, and incompatible formats.

**Modify Audit Metadata**
- Allow the user to update audit information after creation.
- Metadata changes do not create a new audit or replace its identity.
- Support changes in the responsible auditor while preserving existing assessments, scope, and comments.

**Open Audit**
- Allow the user to select an existing locally stored audit.
- Open its corresponding dashboard.

**Delete Audit**
- Allow the user to permanently delete an audit from the saved-audits list.
- Require two confirmation steps before deletion.
- Delete only the selected audit and its associated local data.

### 3.2. Audit Assessment

**Configure Audit Scope**
- Allow the user to include or exclude evaluable framework elements.
- Scope determines which elements participate in the active assessment and progress calculations.
- Excluded elements are hidden from the active assessment board.
- Previously recorded assessments and comments are preserved when an element is excluded and restored if it is included again.

**Assess Requirements**
- Allow the auditor to assign one of the following statuses to each in-scope evaluable requirement:
  - Completed
  - In Progress
  - Pending
- Allow the auditor to update a requirement's status as new information or evidence becomes available.
- Automatically save changes locally.
- Recalculate parent element states and dashboard indicators immediately after changes.

**Manage Comments**
- Allow the auditor to add or edit a comment associated with an assessment.
- Comments provide context, explanations, commitments, or relevant discussion notes.
- Comments are saved automatically along with assessment changes.

### 3.3. Reports and Export

Reports represent a snapshot of the audit at the moment they are generated. They can be generated at any time, including while the audit is incomplete.

Each report includes its generation date and time, indicating the exact point in time represented by the document.

**General Report (PDF)**
- Provide an executive-level overview of the audit.
- Include audit identification and relevant metadata.
- Display the current completion percentage and graphical summaries of assessment statuses.
- Reflect the current audit state at the time of generation.

**Detailed Report (PDF)**
- Include all information presented in the General Report.
- Provide a detailed breakdown of framework pillars or functions, categories, controls, and evaluable requirements.
- Display the current status and associated comments for each evaluable requirement.
- Include elements excluded from the audit scope, clearly identified as Out of Scope.
- Excluded elements do not participate in assessment totals or completion calculations.
- Reflect the same audit state and generation timestamp as the corresponding general report.

**Excel Checklist**
- Generate an editable spreadsheet representing the current audit assessment.
- Organize information into columns for the framework pillar or function, control or requirement, current assessment status, and comments.
- Include elements outside the audit scope, clearly identified as Out of Scope.
- Use the same assessment statuses as the application.
- The spreadsheet is an independent external working document. Changes made to it do not update or synchronize with the audit stored in Ratatoskr Check.

**Export Audit Session**
- Generate a portable `.ratatoskr` file containing the complete audit session and its associated information.
- Allow the user to choose the file name and save location.
- Protect the exported file with password-based encryption.
- Allow the exported session to be imported later using the corresponding password.
- Each export generates a separate file without modifying the original exported file.
- Keep session export separate from report generation and automatic local saving.

### 3.4. Local Persistence

**Automatically Save Audit**
- Automatically save audit changes to local storage.
- Allow previously saved audits to be reopened in the same browser environment.
- Keep automatic local persistence independent from session export and import.
- Evaluate local storage protection and recovery limitations as part of the application's security considerations.

## 4. Application Responsibilities

The Application layer coordinates the execution of use cases and the interactions required to complete them.

It does not contain framework-specific business rules or depend directly on concrete infrastructure implementations.

Infrastructure provides the technical services required by the application, such as local persistence, file operations, encryption, and report generation.

The Domain layer remains responsible for the core audit concepts and business rules, while Presentation provides the user-facing interface.

## 5. Design Considerations

- Each audit is an independent working session.
- Audit metadata can change without changing the audit's identity.
- Framework definitions are predefined reference data and are not modified by users.
- Assessment statuses and scope are separate concepts.
- Automatic local saving is distinct from exporting an audit session.
- Reports are generated on demand and represent the current state of the audit.
- Excel exports are not synchronized back into the application.
- Exported session files are independent copies of an audit.
- Local storage protection remains subject to further evaluation.
- Destructive operations require explicit confirmation.