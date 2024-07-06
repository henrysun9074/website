export async function post({ request }) {
    try {
      const formData = await request.formData();
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
  
      // Handle the form data (e.g., save to database, send an email, etc.)
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  
      return new Response('Thank you for your message!', { status: 200 });
    } catch (error) {
      console.error('Error handling form submission:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }
  