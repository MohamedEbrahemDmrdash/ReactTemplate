import styled from 'styled-components'

export const ProfileSkills =styled.div
`
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileSection = styled.div
`
    width: 50%;
    float: left;
`

export const ProfileList = styled.ul
`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const ProfileItem = styled.li
`
    margin-bottom: 8px
`

export const Span = styled.span
`
    display: inline-block;
    width: 120px;
    font-weight: ${props=>props.active? 'bold' : 'normal' };
    font-family: lucida sans;
    color: ${props=>props.fir===6? '#eb5424' : '#000' };
`

export const Skills = styled.div
`
    width: 50%;
    float: left;
`

export const SkillsDesc = styled.p
`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar = styled.div
`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const Title = styled.span
`
    float: left;
`

export const Perc =styled.span
`
    float: right;
    margin-right: 100px
`

export const ParentSection = styled.div
`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`

export const ParentSpan = styled.span
`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width : ${props=>props.first==='Sp1'? '100%' : ( props.first==='Sp2'? '90%' : '80%' )}
`

export const ProfileTitle = styled.h2
`
    font-size: 40px; 
    margin-bottom: 20px
`

export const ProfileTitleSpan = styled.span
`
    font-weight: normal;
`

export const SkillsTitleSpan = styled.span
`
    font-weight: normal;
`
export const SkillsTitle = styled.h2
`
    font-size: 40px; 
    margin-bottom: 20px
`