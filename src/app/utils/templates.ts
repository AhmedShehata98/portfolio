import { getMessages } from "next-intl/server";

export const adminTemplate = async ({
  name,
  email,
  service,
  message,
}: {
  name: string;
  email: string;
  service: string;
  message: string;
}) => {
  const messages = await getMessages();
  return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${messages.template.adminNotifyMail.heading}</title>   
  <style>
    /* Embedding fonts can be problematic in emails, better to use web-safe fonts */
    body {
      margin: 0;
      padding: 0;
      background-color: #f4eff4;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#6750a4;">
    <tr>
      <td align="center" style="padding:16px 0;">
        <h1 style="color:#ffffff; font-size:20px; font-weight:bold; font-family:Arial, sans-serif; margin:0;">
          🚀 ${messages.template.adminNotifyMail.heading}
        </h1>
      </td>
    </tr>
  </table>

  <!-- Card -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; background-color:#fef7ff; border-radius:12px; padding:24px; color:#1c1b1f; box-shadow:0 4px 12px rgba(0,0,0,0.06); font-family:Arial, sans-serif;">
          <tr>
            <td style="font-size:22px; font-weight:bold; color:#1c1b1f; padding-bottom:12px; border-bottom:1px solid #ddd;">
              ${messages.template.adminNotifyMail.title}
            </td>
          </tr>

          <tr>
            <td style="padding-top:14px;">
              <p style="font-size:14px; color:#625b71; margin:0;">${
                messages.template.adminNotifyMail.nameLabel
              }</p>
              <p style="font-size:16px; font-weight:500; color:#1c1b1f; margin:4px 0 0 0;">${name}</p>
            </td>
          </tr>

          <tr>
            <td style="padding-top:10px;">
              <p style="font-size:14px; color:#625b71; margin:0;">${
                messages.template.adminNotifyMail.emailLabel
              }</p>
              <p style="font-size:16px; font-weight:500; color:#1c1b1f; margin:4px 0 0 0;">${email}</p>
            </td>
          </tr>

          <tr>
            <td style="padding-top:10px;">
              <p style="font-size:14px; color:#625b71; margin:0;">${
                messages.template.adminNotifyMail.serviceLabel
              }</p>
              <p style="font-size:16px; font-weight:500; color:#1c1b1f; margin:4px 0 0 0;">${service}</p>
            </td>
          </tr>

          <tr>
            <td style="padding-top:20px;">
              <div style="background-color:#e4e4e4; border:1px solid #c3c3c3; padding:18px; border-radius:8px;">
                <p style="font-size:14px; color:#625b71; margin:0 0 8px 0;">${
                  messages.template.adminNotifyMail.messageLabel
                }</p>
                <p style="font-size:16px; font-weight:500; color:#1c1b1f; margin:0; white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding-top:20px; text-align:center;">
              <a href="mailto:${email}" style="display:inline-block; background-color:#6750a4; color:#ffffff; text-decoration:none; font-weight:500; font-size:15px; padding:12px 24px; border-radius:24px; font-family:Arial, sans-serif;">
                ${messages.template.adminNotifyMail.btn}
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="font-size:12px; color:#8c8c8c; padding:16px; font-family:Arial, sans-serif;">
        &copy; ${new Date().getFullYear()} All rights reserved
      </td>
    </tr>
  </table>

</body>
</html>`;
};
export const clientEmailTemplate = async ({
  name,
  service,
}: {
  name: string;
  service: string;
}) => {
  const messages = await getMessages();

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${messages.template.clientReceiveMail.heading} ${name}</title>   
  <style>
    /* Embedding fonts can be problematic in emails, better to use web-safe fonts */
    body {
      margin: 0;
      padding: 0;
      background-color: #f4eff4;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#6750a4;">
    <tr>
      <td align="center" style="padding:16px 0;">
        <h1 style="color:#ffffff; font-size:20px; font-weight:bold; font-family:Arial, sans-serif; margin:0;">
          ${messages.template.clientReceiveMail.heading} ${service}
        </h1>
      </td>
    </tr>
  </table>

  <!-- Card Content -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; background-color:#fef7ff; border-radius:12px; padding:24px; color:#1c1b1f; box-shadow:0 4px 12px rgba(0,0,0,0.06); font-family:Arial, sans-serif;">
          <tr>
            <td style="font-size:18px; font-weight:bold; padding-bottom:12px;">
              ✅ ${
                messages.template.clientReceiveMail.title
              } <span style="color:#6750a4;">${service}</span>!
            </td>
          </tr>
          <tr>
            <td style="font-size:16px; color:#444444; line-height:1.6; padding-top:8px;">
              ${messages.template.clientReceiveMail.message}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="font-size:13px; color:#8c8c8c; padding:16px; font-family:Arial, sans-serif;">
        &copy; ${new Date().getFullYear()} All rights reserved
      </td>
    </tr>
  </table>

</body>
</html>`;
};
