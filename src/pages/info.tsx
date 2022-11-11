import React, {FC} from 'react'
import {graphql} from 'gatsby'
import Text from 'components/Text'
import styled from "@emotion/styled";



const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`
type InfoPageProps = {
    data: {
        site: {
            siteMetadata: {
                title: string
                description: string
                author: string
            }
        }
    }
}
const InfoPage: FC<InfoPageProps> = ({data}) => {
    const {title, description, author} = {...data.site.siteMetadata};
    return (
        <div>
            <Text1  disable={true} >{title}</Text1>
            <Text text={description}/>
            <Text text={author}/>
        </div>
    )
}

export default InfoPage

export const metadataQuery = graphql`
    {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`