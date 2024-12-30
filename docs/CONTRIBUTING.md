# Contributing to aid-mvvm

### Getting a Jira Ticket

1. For new contributions, reach out to our project maintainers:
   - Open a GitHub Discussion in the "Ideas" category by [clicking here](https://github.com/aid-mvvm/aid-mvvm/discussions/categories/ideas)
   - Report an issue by [clicking here](https://github.com/aid-mvvm/aid-mvvm/issues/new)
2. The maintainers will:
   - Review your proposed contribution
   - Create a Jira ticket if approved
   - Provide you with the AID-XXX ticket number

### Quick Start

1. **Fork and Clone**
   ```bash
   git clone https://github.com/aid-mvvm/aid-mvvm.git
   cd aid-mvvm
   ```

2. **Set Up Commit Template**
   ```bash
   git config commit.template .gitmessage.txt
   ```

3. **Create Feature Branch**
   ```bash
   git checkout -b feat/AID-123/short-description
   ```

4. **Make Changes and Commit**
   ```bash
   git add .
   git commit
   # The commit template will open in your editor
   ```

## Conventions

### Commit Messages

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format with our AID ticket requirement:

```
type(AID-123): subject in lowercase

Summary of changes:
- What changed
- Why it changed
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the functionality of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Example Commit

```
feat(AID-123): add user authentication flow

Summary of changes:
- Added OAuth2 login implementation with session management support.
```

### Branch Names

Branch names must adhere to the following format:
```
type/AID-XXX/short-description
```

Where `type` is one of the commit types listed above, `AID-XXX` is your ticket number, and `short-description` briefly describes the changes.

Example:
```
feat/AID-123/add-oauth2-login
```

### Pull Requests

- Title format: `feat(AID-123): subject in lowercase`
- Include:
  - Summary of changes
  - Screenshots (if UI changes)
  - Additional Notes (optional)
- Pass all CI checks before requesting review 