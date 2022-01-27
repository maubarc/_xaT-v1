import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import  React from  'react';
import {useRouter} from  'next/router';
import appConfig from '../config.json';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}


export default function PaginaInicial() {
  
  const [username, setUsername]  = React.useState('maubarc');
  const roteamento = useRouter();

  return (
    <>
      
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          
          backgroundImage: 'url(https://images3.alphacoders.com/687/thumb-1920-687908.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          width: '500px', maxWidth: '700px',
          borderRadius: '5px', padding: '32px', margin: '16px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          
        }}
      >
        
        {/* Formulário */}
        <Box
          as="form"
          onSubmit={function(infosDoEvento){
            infosDoEvento.preventDefault();
            roteamento.push('./chat');
          }}
          styleSheet={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
          }}
        >
        <Titulo tag="h2">Seja bem vindo ao Chat 2022!</Titulo>
        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
          {appConfig.name}
        </Text>
        
        <TextField
          value={username}
          onChange={function(event){
            //onde esta o valor?
            const valor = event.target.value;
            //trocar o valor da variavel
            //atravez do react e avise quem precisa  
            setUsername(valor);
          }}
          fullWidth
          textFieldColors={{
            neutral: {
              textColor: appConfig.theme.colors.neutrals[200],
              mainColor: appConfig.theme.colors.neutrals[900],
              mainColorHighlight: appConfig.theme.colors.primary[500],
              backgroundColor: appConfig.theme.colors.neutrals[150],
            },
          }}
        />

          <Button
            type='submit'
            label='Entrar'
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["100"],
              mainColor: appConfig.theme.colors.primary[900],
              mainColorLight: appConfig.theme.colors.primary[400],
              mainColorStrong: appConfig.theme.colors.primary[100],
            }}
          />

          </Box>
          {/* Formulário */}


          {/* Photo Area */}

          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '150px',
              padding: '16px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            
          <Image
            styleSheet={{
              borderRadius: '50%',
              marginBottom: '16px',
            }}
            src={`https://github.com/${username}.png`}
          />
          <Text
            variant="body4"
            styleSheet={{
              color: appConfig.theme.colors.neutrals[200],
              backgroundColor: appConfig.theme.colors.neutrals[900],
              padding: '3px 10px',
              borderRadius: '1000px'
            }}
          >
          
            {username}
          
          </Text>
          
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
