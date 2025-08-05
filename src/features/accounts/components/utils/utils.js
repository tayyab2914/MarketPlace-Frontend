export   function extractTokenAndEmail() {
    const url = window.location.href;
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    const token = params.get("token");
    const email = params.get("email");
    return { token, email };
  }