---
name: GitHub repository sync
description: Safe approach for synchronizing an attached GitHub repository with a Replit checkout that may already contain local commits.
---

When a checkout already contains local work, compare the authenticated GitHub file state with the workspace before pulling or replacing files. Preserve Replit-specific configuration and merge content conflicts deliberately.

**Why:** A Git remote can reject an old or invalid token even when the managed GitHub connection is healthy, and a blind pull can overwrite local commits or Replit setup.

**How to apply:** Use the attached GitHub connection to inspect the repository, preserve local commits, and only replace or merge files after the user chooses the reconciliation strategy.