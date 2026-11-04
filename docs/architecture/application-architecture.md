# Ratatoskr Check: Application Architecture

**Status:** Conceptual draft

## 1. Purpose

This document describes the proposed internal architecture of Ratatoskr Check.

It defines the main responsibilities of the application, how its components interact, and the principles that will guide its implementation.

The architecture aims to keep the application modular, maintainable, and adaptable to future requirements while preserving its local-first approach.

## 2. Architectural Overview

Ratatoskr Check will follow a layered architecture that separates business rules, application operations, infrastructure, and user interface responsibilities.

The proposed architecture consists of four main layers:

- **Domain:** Core concepts and business rules related to audits, frameworks, scope, and assessments.
- **Application:** Use cases and operations that coordinate the application's behavior.
- **Infrastructure:** Technical implementations for data persistence, file handling, and other external capabilities.
- **Presentation:** User interface components through which users interact with the application.

The responsibilities and interactions of these layers will be defined in the following sections.