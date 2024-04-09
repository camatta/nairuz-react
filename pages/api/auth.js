import jwt from 'jsonwebtoken';

// Rota para lidar com a autenticação do usuário
async function AuthWordpress(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    // Obtenha os dados de login do corpo da solicitação
    const { username, password } = req.body;
  
    // Verifique se as credenciais de login são válidas (por exemplo, consultando um banco de dados)
    const validCredentials = await verifyCredentials(username, password);
  
    if (!validCredentials) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    // Se as credenciais forem válidas, crie um token JWT para o usuário
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
  
    // Retorne o token JWT para o cliente
    return res.status(200).json({ token });
  }

  export default AuthWordpress;