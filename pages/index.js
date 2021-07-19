import React, {Component, useState, useEffect} from "react";
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


function ProfileRelationCommunityBox(props){
  return(
    <Box>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Seguidores ({props.followers?.length})
        </h2>
        <ul>
          {(props.followers)
            ?.map((follower) => {
              return(
                <li key={follower.id}>
                  <a href={follower.html_url}>
                    <img src={follower.html_url+'.png'}/>
                    <span>{follower.login}</span>
                  </a> 
                </li>
              )
            })
          }
        </ul>
      </ProfileRelationsBoxWrapper>
    </Box>
  )
}


export default function Home() {

  const Resources = {
    githubBaseUrl: 'https://github.com/',
    githubAPIBaseUrl: 'https://api.github.com',
    githubUser: 'vanisantos'
  }

  const communityFriends = [
    "omariosouto",
    "glaucia86",
    "juunegreiros",
    "peas",
    "ElasProgramam",
    "Kamilahsantos"
  ];

  const [communities, setCommunities] = useState([{
    id: '12802378123789378912789789123896123', 
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

  const [followers, setFollowers] = useState([]);
  useEffect(function() {
    fetch(`${Resources.githubAPIBaseUrl}/users/${Resources.githubUser}/followers`)
    .then(function (responseServer){
      return responseServer.json();
    })
    .then(function (responseData) {
      setFollowers(responseData);
    })
  }, [])

  return (
    <>
      <AlurakutMenu
        githubUser={Resources.githubUser}
      />
      <MainGrid>

        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar 
            githubBaseUrl={Resources.githubBaseUrl}
            githubUser={Resources.githubUser}
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
                        <img src={Resources.githubBaseUrl + friend + '.png'}/>
                        <span>{friend}</span>
                      </a> 
                    </li>
                  )
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationCommunityBox
            followers={followers}
          />
        </div>
      </MainGrid>
    </>
  )
}