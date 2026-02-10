export const suportEmail = 'suporte.mukutu@gmail.com'

export const verificationEmail = (codigoConfirmacao: string) => {
    return `
        <!DOCTYPE html>
        <html lang="pt-pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verificação de Email</title>
            <style>

                @font-face {
                    font-family: poppins;
                    src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
                }

                body {
                    font-family: poppins;
                    line-height: 1.6;
                    color: #333;
                    background-color: #fff;
                    margin: 0;
                    padding: 20px;
                }

                .container {
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 8px;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .logo {
                    max-width: 150px;
                    height: auto;
                    margin-bottom: 20px;
                    display: block;
                }

                .verification-code {
                    font-size: 24px;
                    font-weight: bold;
                    color: #006CE9;
                    /* Cor primária da sua plataforma */
                    margin-top: 10px;
                    margin-bottom: 15px;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    background-color: #f9f9f9;
                    text-align: center;
                }

                .alert {
                    font-size: 0.9em;
                    color: #777;
                    margin-top: 20px;
                }

                .italic {
                    font-style: italic;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
                <p>Seu código de verificação:</p>
                <p class="verification-code">${codigoConfirmacao}</p>
                <p>O código de verificação é válido por 10 minutos e só deve ser usado uma vez. Por favor, não compartilhe esse
                    código com ninguém.</p>
                <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
                <p>Email de suporte: ${suportEmail}</p>
                <p>Equipe Mukutu.</p>
                <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
            </div>
        </body>

        </html>
 `
}

export const authorizationRecuperationSenha = (codigoConfirmacao: string) => {
    return `
        <!DOCTYPE html>
        <html lang="pt-pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Recuperação de Senha</title>
            <style>

                @font-face {
                    font-family: poppins;
                    src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
                }

                body {
                    font-family: poppins;
                    line-height: 1.6;
                    color: #333;
                    background-color: #fff;
                    margin: 0;
                    padding: 20px;
                }

                .container {
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 8px;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .logo {
                    max-width: 150px;
                    height: auto;
                    margin-bottom: 20px;
                    display: block;
                }

                .verification-code {
                    font-size: 24px;
                    font-weight: bold;
                    color: #006CE9;
                    /* Cor primária da sua plataforma */
                    margin-top: 10px;
                    margin-bottom: 15px;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    background-color: #f9f9f9;
                    text-align: center;
                }

                .alert {
                    font-size: 0.9em;
                    color: #777;
                    margin-top: 20px;
                }

                .italic {
                    font-style: italic;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
                <p>Seu código de autorização:</p>
                <p class="verification-code">${codigoConfirmacao}</p>
                <p>O código de autorização é válido por 10 minutos e só deve ser usado uma vez. Por favor, não compartilhe esse código com ninguém.</p>
                <p>Caso não solicitaste a recuperação de senha, pode ser que alguém queira fazê-lo, considere alterar a sua senha rapidamente.</p>
                <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
                <p>Email de suporte: ${suportEmail}</p>
                <p>Equipe Mukutu.</p>
                <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
            </div>
        </body>

        </html>
 `
}

export const blockUserEmail = (nomeUsuario: string, motivoBloqueio: string) => {
    return `
        <!DOCTYPE html>
        <html lang="pt-pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Conta Bloqueada</title>
            <style>
                @font-face {
                    font-family: poppins;
                    src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
                }

                body {
                    font-family: poppins;
                    line-height: 1.6;
                    color: #333;
                    background-color: #fff;
                    margin: 0;
                    padding: 20px;
                }

                .container {
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 8px;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .logo {
                    max-width: 150px;
                    height: auto;
                    margin-bottom: 20px;
                    display: block;
                }

                .alert {
                    font-size: 0.9em;
                    color: #777;
                    margin-top: 20px;
                }

                .italic {
                    font-style: italic;
                }

                .error {
                    color: #d55
                }

                .primary {
                    color: #006CE9
                }

                .bold {
                    font-weight: 600;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
                <p class="error">Conta Bloqueada</p>
                <p>Olá <span class="primary">${nomeUsuario}</span>, gostaríamos de informar que a sua conta foi
                    temporariamente bloqueada.</p>
                <p> <span class="bold">Motivo do Bloqueio: </span>${motivoBloqueio}</p>
                </p>
                <span>Por favor, entre em contato com nossa equipe de suporte para que possamos fornecer mais detalhes e auxiliar na resolução.</span>
                <p>Email de suporte: ${suportEmail}</p>
                <p>Equipe Mukutu.</p>
                <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
            </div>
        </body>

        </html>
    `
}

export const permitUserEmail = (nomeUsuario: string) => {
    return `
        <!DOCTYPE html>
<html lang="pt-pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conta Autorizada</title>
    <style>
        @font-face {
            font-family: poppins;
            src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
        }

        body {
            font-family: poppins;
            line-height: 1.6;
            color: #333;
            background-color: #fff;
            margin: 0;
            padding: 20px;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            max-width: 600px;
            margin: 0 auto;
        }

        .logo {
            max-width: 150px;
            height: auto;
            margin-bottom: 20px;
            display: block;
        }

        .alert {
            font-size: 0.9em;
            color: #777;
            margin-top: 20px;
        }

        .italic {
            font-style: italic;
        }

        .success {
            color: #5c5
        }

        .primary {
            color: #006CE9
        }

        .bold {
            font-weight: 600;
        }
    </style>
</head>

<body>
    <div class="container">
        <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
        <p class="success">Conta Autorizada</p>
        <p>Olá <span class="primary">${nomeUsuario}</span>, estamos felizes em informar que o acesso à sua conta foi restabelecido.</p>
        <p>Já podes acessar a Plataforma novamente e continuar as suas actividades.</p>
        <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
        <p>Email de suporte: ${suportEmail}</p>
        <p>Equipe Mukutu.</p>
        <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
    </div>
</body>

</html>
    `
}

export const approveProductEmail = (nomeProduto: string) => {
    return `
    <!DOCTYPE html>
    <html lang="pt-pt">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Produto Aprovado</title>
        <style>

            @font-face {
                font-family: poppins;
                src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
            }

            body {
                font-family: poppins;
                line-height: 1.6;
                color: #333;
                background-color: #fff;
                margin: 0;
                padding: 20px;
            }

            .container {
                background-color: #fff;
                padding: 30px;
                border-radius: 8px;
                max-width: 600px;
                margin: 0 auto;
            }

            .logo {
                max-width: 150px;
                height: auto;
                margin-bottom: 20px;
                display: block;
            }
            .alert {
                font-size: 0.9em;
                color: #777;
                margin-top: 20px;
            }

            .italic {
                font-style: italic;
            }
            .success{
                color: #5c5
            }
            .primary{
                color: #006CE9
            }
            .bold{
                font-weight: 600;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
            <p class="success">Produto Aprovado</p>
            <p>Prezado Formador, estamos felizes em informar que o seu produto <span class="primary">${nomeProduto}</span> foi aprovado.</p>
            <p>Estamos ansiosos para ver o engajamento dos alunos com o seu Produto. Continue criando materiais incríveis!</p>
            <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
            <p>Email de suporte: ${suportEmail}</p>
            <p>Equipe Mukutu.</p>
            <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
        </div>
    </body>

    </html>
    `
}

export const disapproveProductEmail = (nomeProduto: string, motivoReprovacao: string) => {
    return `
    <!DOCTYPE html>
    <html lang="pt-pt">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Produto Reprovado</title>
        <style>
            @font-face {
                font-family: poppins;
                src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
            }

            body {
                font-family: poppins;
                line-height: 1.6;
                color: #333;
                background-color: #fff;
                margin: 0;
                padding: 20px;
            }

            .container {
                background-color: #fff;
                padding: 30px;
                border-radius: 8px;
                max-width: 600px;
                margin: 0 auto;
            }

            .logo {
                max-width: 150px;
                height: auto;
                margin-bottom: 20px;
                display: block;
            }

            .alert {
                font-size: 0.9em;
                color: #777;
                margin-top: 20px;
            }

            .italic {
                font-style: italic;
            }

            .error {
                color: #d55
            }

            .primary {
                color: #006CE9
            }

            .bold {
                font-weight: 600;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
            <p class="error">Produto Reprovado</p>
            <p>Prezado Formador, lamentamos informar que o seu produto <span class="primary">${nomeProduto}</span> foi
                reprovado.</p>
            <p> <span class="bold">Motivo da Reprovação: </span>${motivoReprovacao}</p>
            <p>Por favor, revise as informações, faça as devidas alterações e submeta o produto novamente para a revisão</p>
            <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
            <p>Email de suporte: ${suportEmail}</p>
            <p>Equipe Mukutu.</p>
            <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
        </div>
    </body>

    </html>
    `
}

export const conviteAcessoCurso = (nomeCurso: string, nomeFormador: string, codigoAcesso: string) => {
    return `
        <!DOCTYPE html>
        <html lang="pt-pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Convite de Acesso</title>
            <style>

                @font-face {
                    font-family: poppins;
                    src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
                }

                body {
                    font-family: poppins;
                    line-height: 1.6;
                    color: #333;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }

                .container {
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                    margin: 0 auto;
                }

                .logo {
                    max-width: 150px;
                    height: auto;
                    margin-bottom: 20px;
                    display: block;
                }

                .verification-code {
                    font-size: 24px;
                    font-weight: bold;
                    color: #006CE9;
                    /* Cor primária da sua plataforma */
                    margin-top: 10px;
                    margin-bottom: 15px;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    background-color: #f9f9f9;
                    text-align: center;
                }
                .primary{
                    color: #006CE9
                }
                .alert {
                    font-size: 0.9em;
                    color: #777;
                    margin-top: 20px;
                }

                .italic {
                    font-style: italic;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
                <p class="success">Prezado Estudante, recebeste um convite de ${nomeFormador} para aceder ao <span class="primary">${nomeCurso}</span></p>
                <p>Seu código de acesso:</p>
                <p class="verification-code">${codigoAcesso}</p>
                <p>O código de acesso é válido por 24h e só deve ser usado uma vez. Por favor, não compartilhe esse
                    código com ninguém.</p>
                <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
            </div>
        </body>

        </html>
    `
}

//enviado ao formador que enviou o convite
export const concludeAcessoCursoToFormador = (venda: any) => {
    return `
        <!DOCTYPE html>
<html lang="pt-pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produto Aprovado</title>
    <style>

        @font-face {
            font-family: poppins;
            src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
        }

        body {
            font-family: poppins;
            line-height: 1.6;
            color: #333;
            background-color: #fff;
            margin: 0;
            padding: 20px;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            max-width: 600px;
            margin: 0 auto;
        }

        .logo {
            max-width: 150px;
            height: auto;
            margin-bottom: 20px;
            display: block;
        }
        .alert {
            font-size: 0.9em;
            color: #777;
            margin-top: 20px;
        }

        .italic {
            font-style: italic;
        }
        .success{
            color: #5c5
        }
        .primary{
            color: #006CE9
        }
        .bold{
            font-weight: 600;
        }
    </style>
</head>

<body>
    <div class="container">
        <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
        <p class="success">Convite aceite</p>
        <p>Prezado Formador, o convite enviado ao Estudante <span class="primary">${venda.Aluno.nome}</span>, para aceder ao <span class="primary">${venda.Produto.nome} </span>foi aceite</p>
        <p>Seu talento como educador é fundamental para nossa comunidade. Parabéns!"</p>
        <p class="alert">Saiba mais, analisando o seu painel de vendas.</p>
        <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
        <p>Email de suporte: ${suportEmail}</p>
        <p>Equipe Mukutu.</p>
        <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
    </div>
</body>

</html>
    `
}

//enviado ao aluno que aceitou o convite
export const concludeAcessoCursoToAluno = (compra: any) => {
    return `
        <!DOCTYPE html>
<html lang="pt-pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produto Aprovado</title>
    <style>

        @font-face {
            font-family: poppins;
            src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
        }

        body {
            font-family: poppins;
            line-height: 1.6;
            color: #333;
            background-color: #fff;
            margin: 0;
            padding: 20px;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            max-width: 600px;
            margin: 0 auto;
        }

        .logo {
            max-width: 150px;
            height: auto;
            margin-bottom: 20px;
            display: block;
        }
        .alert {
            font-size: 0.9em;
            color: #777;
            margin-top: 20px;
        }

        .italic {
            font-style: italic;
        }
        .success{
            color: #5c5
        }
        .primary{
            color: #006CE9
        }
        .bold{
            font-weight: 600;
        }
    </style>
</head>

<body>
    <div class="container">
        <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
        <p class="success">Acesso concluído</p>
        <p>Prezado Estudante, confirmamos o seu acesso ao: <span class="primary">${compra.Produto.nome}</span>.</p>
        <p>Desejamos-lhe sucesso em seus estudos com este material e esperamos que ele contribua significativamente para o seu aprendizado!</p>
        <p class="alert">Saiba mais, analisando o seu painel de compras.</p>
        <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
        <p>Email de suporte: ${suportEmail}</p>
        <p>Equipe Mukutu.</p>
        <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
    </div>
</body>

</html>
    `
}

export const concludeSaleEmail = (venda: any, text: string) => {
    return `
        <!DOCTYPE html>
<html lang="pt-pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produto Aprovado</title>
    <style>

        @font-face {
            font-family: poppins;
            src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
        }

        body {
            font-family: poppins;
            line-height: 1.6;
            color: #333;
            background-color: #fff;
            margin: 0;
            padding: 20px;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            max-width: 600px;
            margin: 0 auto;
        }

        .logo {
            max-width: 150px;
            height: auto;
            margin-bottom: 20px;
            display: block;
        }
        .alert {
            font-size: 0.9em;
            color: #777;
            margin-top: 20px;
        }

        .italic {
            font-style: italic;
        }
        .success{
            color: #5c5
        }
        .primary{
            color: #006CE9
        }
        .bold{
            font-weight: 600;
        }
    </style>
</head>

<body>
    <div class="container">
        <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
        <p class="success">Venda realizada</p>
        <p>${text}: <span class="primary">${venda.Produto.nome}</span>.</p>
        <p>Seu talento como educador é fundamental para nossa comunidade. Parabéns!"</p>
        <p>O produto foi adquirido por ${venda.Aluno.nome} - ${venda.Aluno.email}</p>
        <p class="alert">Saiba mais, analisando o seu painel de vendas.</p>
        <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
        <p>Email de suporte: ${suportEmail}</p>
        <p>Equipe Mukutu.</p>
        <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
    </div>
</body>

</html>
    `
}

// <link href={`${CLIENT_PROTOCOL}://${CLIENT_HOST}:${CLIENT_PORT}/marketplace/${afiliacao.Produto?.idProduto}?afiliado=${afiliacao.idAfiliado}`}></link>
export const concludeBuyEmail = (compra: any) => {
    return `
        <!DOCTYPE html>
        <html lang="pt-pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Produto Aprovado</title>
            <style>

                @font-face {
                    font-family: poppins;
                    src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
                }

                body {
                    font-family: poppins;
                    line-height: 1.6;
                    color: #333;
                    background-color: #fff;
                    margin: 0;
                    padding: 20px;
                }

                .container {
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 8px;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .logo {
                    max-width: 150px;
                    height: auto;
                    margin-bottom: 20px;
                    display: block;
                }
                .alert {
                    font-size: 0.9em;
                    color: #777;
                    margin-top: 20px;
                }

                .italic {
                    font-style: italic;
                }
                .success{
                    color: #5c5
                }
                .primary{
                    color: #006CE9
                }
                .bold{
                    font-weight: 600;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
                <p class="success">Compra realizada</p>
                <p>Prezado Estudante, confirmamos a sua compra do produto: <span class="primary">${compra.Produto.nome}</span>.</p>
                <p>Desejamos-lhe sucesso em seus estudos com este material e esperamos que ele contribua significativamente para o seu aprendizado!</p>
                <p class="alert">Saiba mais, analisando o seu painel de compras.</p>
                <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
                <p>Email de suporte: ${suportEmail}</p>
                <p>Equipe Mukutu.</p>
                <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
            </div>
        </body>

        </html>
    `
}

export const concludeDrawMoneyEmail = () => {
    return `
        <!DOCTYPE html>
        <html lang="pt-pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Levantamento de Valores</title>
            <style>

                @font-face {
                    font-family: poppins;
                    src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
                }

                body {
                    font-family: poppins;
                    line-height: 1.6;
                    color: #333;
                    background-color: #fff;
                    margin: 0;
                    padding: 20px;
                }

                .container {
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 8px;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .logo {
                    max-width: 150px;
                    height: auto;
                    margin-bottom: 20px;
                    display: block;
                }
                .alert {
                    font-size: 0.9em;
                    color: #777;
                    margin-top: 20px;
                }

                .italic {
                    font-style: italic;
                }
                .success{
                    color: #5c5
                }
                .primary{
                    color: #006CE9
                }
                .bold{
                    font-weight: 600;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
                <p class="success">Levantamento Concluído</p>
                <p>Prezado Formador, a sua solicitação de levantamento de valores na sua carteira foi concluído.</p>
                <p>Estamos muito felizes em ver seu trabalho alcançar mais aprendizes e esperamos que desfrutes das recompensas do seu esforço e dedicação.</p>
                <p>Os valores irão refletir em 24h no máximo</p>
                <p class="alert">Saiba mais, analisando os levantamentos na sua carteira da Plataforma.</p>
                <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
                <p>Email de suporte: ${suportEmail}</p>
                <p>Equipe Mukutu.</p>
                <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
            </div>
        </body>

        </html>
    `
}

export const concludeDepositMoneyEmail = () => {
    return `
        <!DOCTYPE html>
        <html lang="pt-pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Carregamento da Carteira</title>
            <style>

                @font-face {
                    font-family: poppins;
                    src: url(../client/src/sections/shared/assets/fonts/Poppins-Regular.ttf);
                }

                body {
                    font-family: poppins;
                    line-height: 1.6;
                    color: #333;
                    background-color: #fff;
                    margin: 0;
                    padding: 20px;
                }

                .container {
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 8px;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .logo {
                    max-width: 150px;
                    height: auto;
                    margin-bottom: 20px;
                    display: block;
                }
                .alert {
                    font-size: 0.9em;
                    color: #777;
                    margin-top: 20px;
                }

                .italic {
                    font-style: italic;
                }
                .success{
                    color: #5c5
                }
                .primary{
                    color: #006CE9
                }
                .bold{
                    font-weight: 600;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <img src="cid:logotipoMukutu" alt="Logotipo da Plataforma" class="logo">
                <p class="success">Carregamento Concluído</p>
                <p>Prezado Estudante, o carregamento de valores na sua carteira foi concluído.</p>
                <p> Desejamos um bom aproveitamento dos produtos da Plataforma e que estes contribuam significativamente para o seu aprendizado.</p>
                <p class="alert">Saiba mais, analisando os carregamentos na sua carteira da Plataforma.</p>
                <span>Se precisar de suporte técnico, entre em contacto e estaremos à disposição para o ajudar.</span>
                <p>Email de suporte: ${suportEmail}</p>
                <p>Equipe Mukutu.</p>
                <p class="alert"><span class="italic">Esta é uma mensagem automática, por favor, não responda.</span></p>
            </div>
        </body>

        </html>
    `
}

