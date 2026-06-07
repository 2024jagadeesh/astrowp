import { Resend } from 'resend';

const prerender = false;
const resend = new Resend("re_6gBc66x8_BfMocmWhb965stayjRsGwoYE");
const POST = async ({ request }) => {
  try {
    const body = await request.text();
    console.log("RAW BODY:", body);
    const { name, email, message } = JSON.parse(body);
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gsjagadeesh2024@gmail.com",
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `
    });
    console.log("RESEND RESULT:");
    console.log(result);
    return new Response(
      JSON.stringify({
        success: true
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: String(error)
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
