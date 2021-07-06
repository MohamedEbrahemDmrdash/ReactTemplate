import React ,{Component}from "react";
import { ProfileSection,ProfileTitle,ProfileItem,ProfileList,ProfileSkills,ProfileTitleSpan,Span,Skills,SkillsDesc,Bar,Title,Perc,ParentSection,ParentSpan,SkillsTitle,SkillsTitleSpan } from "./style";
import axios from "axios";
class profile extends Component{
    state = {
        profileItems : [],
        profileBar : []
    }

    componentDidMount () {
        axios.get('js/data.json').then( res => { this.setState({ profileItems: res.data.profileItems }) } );
        axios.get('js/data.json').then( res => { this.setState({ profileBar: res.data.profileBar }) } )
    }


    render (){

      
      const {profileItems} = this.state;

      const profileList1 = profileItems.map( (profileItem) => {
          return (
            <ProfileItem key={profileItem.id}>
                <Span active>{profileItem.content}</Span>
                <Span fir={profileItem.id}>{profileItem.mean}</Span>
            </ProfileItem>
          )
      })

      const {profileBar} = this.state;

      const profileBar1 = profileBar.map( (profileBar1) => {
          return (
            <Bar key={profileBar1.id}>
                <Title>{profileBar1.title}</Title>
                <Perc>{profileBar1.perc}</Perc>
                <ParentSection>
                    <ParentSpan first={profileBar1.first}></ParentSpan>
                </ParentSection>
            </Bar>
          )
      })
      return(
      <ProfileSkills>
            <div className="container">
                <ProfileSection>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        {profileList1}
                    </ProfileList>
                </ProfileSection>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {profileBar1}
                </Skills>
                
            </div>
        </ProfileSkills>
      )
    }
}

export default profile;