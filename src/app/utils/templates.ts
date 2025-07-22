export const adminTemplate = ({
  t,
  name,
  email,
  service,
  message,
}: {
  t: (key: string) => string;
  name: string;
  email: string;
  service: string;
  message: string;
}) => {
  return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>${t("template.adminNotifyMail.heading")}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Tajawal&display=swap');
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f4eff4; font-family:'Tajawal', Arial, sans-serif;">

  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#6750a4; padding:16px 0;">
    <tr>
      <td align="center">
        <h1 style="color:#ffffff; font-size:20px; font-weight:bold; font-family:'Tajawal', Arial, sans-serif; margin:0;">
          🚀 ${t("template.adminNotifyMail.heading")}
        </h1>
      </td>
    </tr>
  </table>

  <!-- Card -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding: 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#fef7ff; border-radius:16px; padding:24px; color:#1c1b1f; box-shadow: 0 4px 12px rgba(0,0,0,0.06); font-family:'Tajawal', Arial, sans-serif;">
          <tr>
            <td style="font-size:22px; font-weight:bold; color:#1c1b1f; margin-bottom:12px; padding-bottom:12px; border-bottom:1px solid #ddd;">
              ${t("template.adminNotifyMail.title")}
            </td>
          </tr>

          <tr><td style="font-size:14px; color:#625b71; margin-top:14px;">${t(
            "template.adminNotifyMail.nameLabel"
          )}</td></tr>
          <tr><td style="font-size:16px; font-weight:500; color:#1c1b1f; margin-top:4px;">${name}</td></tr>

          <tr><td height="10"></td></tr>

          <tr><td style="font-size:14px; color:#625b71;">${t(
            "template.adminNotifyMail.emailLabel"
          )}</td></tr>
          <tr><td style="font-size:16px; font-weight:500; color:#1c1b1f;">${email}</td></tr>

          <tr><td height="10"></td></tr>

          <tr><td style="font-size:14px; color:#625b71;">${t(
            "template.adminNotifyMail.serviceLabel"
          )}</td></tr>
          <tr><td style="font-size:16px; font-weight:500; color:#1c1b1f;">${service}</td></tr>

          <tr><td height="20"></td></tr>

          <tr>
            <td style="background-color:#e4e4e4; border:1px solid #c3c3c3; padding:18px;">
              <div style="font-size:14px; color:#625b71; margin-bottom:8px;">${t(
                "template.adminNotifyMail.messageLabel"
              )}</div>
              <div style="font-size:16px; font-weight:500; color:#1c1b1f;">${message}</div>
            </td>
          </tr>

          <tr><td height="20"></td></tr>

          <tr>
            <td align="center">
              <a href="mailto:${email}" style="display:inline-block; background-color:#6750a4; color:#ffffff; text-decoration:none; font-weight:500; font-size:15px; padding:12px 24px; border-radius:24px; font-family:'Tajawal', Arial, sans-serif;">
                ${t("template.adminNotifyMail.btn")}
              </a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="font-size:12px; color:#8c8c8c; text-align:center; padding:16px; font-family:'Tajawal', Arial, sans-serif;">
        <!-- أضف أي نص تريده هنا -->
      </td>
    </tr>
  </table>

</body>
</html>`;
};
export const clientEmailTemplate = ({
  t,
  name,
  service,
}: {
  t: (key: string) => string;
  name: string;
  service: string;
}) => {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>${t("template.clientReceiveMail.heading")} ${name}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Tajawal&display=swap');
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f4eff4; font-family:'Tajawal', Arial, sans-serif;">

  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#6750a4; padding:20px 0;">
    <tr>
      <td align="center">
        <h1 style="color:#ffffff; font-size:20px; font-weight:bold; margin:0; font-family:'Tajawal', Arial, sans-serif;">
          ${t("template.clientReceiveMail.heading")} ${service}
        </h1>
      </td>
    </tr>
  </table>

  <!-- Card Content -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding: 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#fef7ff; border-radius:16px; padding:24px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); font-family:'Tajawal', Arial, sans-serif; color:#1c1b1f;">
          <tr>
            <td style="font-size:18px; font-weight:bold; margin-bottom:12px;">
              ✅ ${t(
                "template.clientReceiveMail.title"
              )} <span style="color:#6750a4;">${service}</span>!
            </td>
          </tr>
          <tr>
            <td style="font-size:16px; color:#444444; line-height:1.6;">
              ${t("template.clientReceiveMail.message")}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="font-size:13px; color:#8c8c8c; padding:20px; font-family:'Tajawal', Arial, sans-serif; text-align:center;">
        <!-- يمكنك إضافة نص في الفوتر هنا -->
      </td>
    </tr>
  </table>

</body>
</html>`;
};
