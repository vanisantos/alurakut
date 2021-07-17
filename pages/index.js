import React from "react";
import { 
  Box, 
  Form,
  MainGrid,
  ProfileSideBar,
  ProfileRelationsBoxWrapper 
} from "../src/Components";

import { 
  AlurakutMenu, 
  OrkutNostalgicIconSet
} from "../src/lib/AlurakutCommons"


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
  ];

  const [communities, setCommunities] = React.useState([{
    id: '12802378123789378912789789123896123', 
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

  return (
    <>
      <AlurakutMenu
        githubUser={githubUser}
      />
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

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <Form
              communities={communities}
              setCommunities={setCommunities}
            />
          </Box>
        </div>

        <div className='relationsArea' style={{ gridArea: 'relationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({communityFriends?.length})
              </h2>
            <ul>
              {communityFriends
                ?.map((friend) => {
                  return(
                    <li key={friend}>
                      <a href={`users/${friend}`}>
                        <img src={githubBaseUrl + friend + '.png'}/>
                        <span>{friend}</span>
                      </a> 
                    </li>
                  )
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>

          <Box>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({communities?.length})
              </h2>
            <ul>
              {(communities)
                ?.map((community) => {
                  return(
                    <li key={community.id}>
                      <a href={`users/${community.title}`}>
                        <img src={community.image}/>
                        <span>{community.title}</span>
                      </a> 
                    </li>
                  )
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>
          </Box>
        </div>
      </MainGrid>
    </>
  )
}