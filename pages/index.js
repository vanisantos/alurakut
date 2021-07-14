import { Box, MainGrid } from "../src/Components/MainGrid"
import { ProfileRelationsBoxWrapper } from "../src/Components/ProfileRelations";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons"

function ProfileSideBar(props) {
  return(
    <Box>
      <img src={props.githubBaseUrl + props.githubUser + '.png'} style={{ borderRadius: '8px' }}></img>
    </Box>
  )
}

export default function Home() {

  const githubBaseUrl = 'https://github.com/';
  const githubUser = 'vanisantos';
  const communityFriends = [
    "omariosouto",
    "juunegreiros",
    "peas",
    "danvitoriano",
    "ElasProgramam",
    "Kamilahsantos"
  ]

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar 
            githubBaseUrl={githubBaseUrl}
            githubUser={githubUser}
          />
        </div>
        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet/>
          </Box>
          <Box>Mensagem</Box>
        </div>
        <div className='relationsArea' style={{ gridArea: 'relationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({communityFriends.length})
              </h2>
            <ul>
              {communityFriends
                .map((friend) => {
                  return(
                    <li>
                      <a href={`users/${friend}`} key={friend}>
                        <img src={githubBaseUrl + friend + '.png'}/>
                        <span>{friend}</span>
                      </a> 
                    </li>
                    
                  )
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Minhas Comunidades</Box>
        </div>
      </MainGrid>
    </>
  )
}
