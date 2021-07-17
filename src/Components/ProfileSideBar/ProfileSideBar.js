import { AlurakutProfileSidebarMenuDefault } from "../../lib/AlurakutCommons"
import { Box } from "../../Components"

export default function ProfileSideBar(props) {
  return(
    <Box>
      <img src={props.githubBaseUrl + props.githubUser + '.png'} style={{ borderRadius: '8px' }}></img>
      <hr/>
      <p>
        <a className="boxLink" href={props.githubBaseUrl + props.githubUser}>@{props.githubUser}</a>
      </p>
      <hr/>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}