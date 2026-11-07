# MUST Student Portal - Login and Registration Page

A simple login and registration web page for Mbarara University of Science and Technology (MUST), built with plain HTML and CSS. 

## Files

| File | Purpose |
| --- | --- |
| `login.html` | The page structure: branding panel, login form and registration form |
| `style.css` | All styling: colors, layout, forms, buttons and the mobile layout |
| `MUST Badge.jpeg` | The university logo shown in the top-left corner (add this file yourself) |

Keep all four files in the same folder.


## How it works

- **Switching forms:** The login form shows by default. Clicking "Create an account" or "Log in" switches forms using CSS only (the `:target` selector). The registration section must stay *before* the login section in `login.html` for this to work.
- **Show password:** Each form has a "Show password" checkbox that reveals or hides the password boxes.
- **Password match:** The registration form will not submit until "Confirm password" matches "Password".
- **Registration number:** When you leave the box, spaces are removed and letters are turned into capitals.
- **Submitting:** There is no server yet, so submitting a form only shows a pop-up message. The form data is not saved or sent anywhere.

## Customizing

- **Colors:** Change the values in the `:root` block at the top of `style.css` (`--navy` and `--gold` are the main brand colors).
- **Logo size and position:** Edit the `.logo` rule in `style.css`.
- **Faculties:** Edit the `<option>` list in the registration form in `login.html`.
- **Text:** Change the headings and labels directly in `login.html`.

## Connecting a real backend later

1. In `login.html`, change each form's `action="#"` to the address of your server script (for example `action="/login"`).


## Browser support

Works in current versions of Chrome, Edge, Firefox and Safari.
