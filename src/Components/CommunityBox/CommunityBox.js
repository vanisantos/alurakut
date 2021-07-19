import { 
  Box,
  ProfileRelationsBoxWrapper,
} from "../../Components";

export default function ProfileRelationCommunityBox(props){
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
