import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout, Seo } from '../../components';
import ReactMarkdown from 'react-markdown';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {formatDate} from '../../utils';

const PostLayout = ({ data: { graphCmsPost: post, cover } }) => {

    const shareImage = post.seo.image ? post.seo.image.url : post.cover.irl || null;

    return (
        <Layout>
            <Seo
                title={post.seo.title}
                description={post.seo.description}
                image={shareImage} />
            <div className="container px-5 mx-auto">
                <GatsbyImage
                    image={getImage(cover)}
                    alt={post.seo.title}
                    className="h-64 lg:h-[380px]"
                />

            <section className="mt-10   mx-auto  max-w-[760px]">
                <h2 className="text-5xl font-bold text-personalizado-text">{post.title} </h2>
                <div className="flex mt-5 space-x-20">
                    <p className="font-bold text-personalizado-text">Escrito por Mauro</p>
                    <p className="text-[#718096]">{formatDate(post.publishedAt, "EEEE, LLLL yyyy")}</p>
                    
                </div>
                <hr className="my-8 border-gray-200"/>

                <div className="max-w-full mb-20 prose ">
                    <ReactMarkdown>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </section>

            </div>
        </Layout>
    )


}

export const query = graphql`
query Post($id: String!, $slug: String!){
    graphCmsPost(slug:{eq:$slug}){
      id
      title
      slug
      
      cover {
          url
      }
      category
      content
      seo{
        title
        description
        image{
            url
        }
        
      }
      publishedAt
    }

    cover: graphCmsAsset( coverPost: { elemMatch: { id: { eq:$id } } } )
    {
        gatsbyImageData(layout:FULL_WIDTH)
    }
  }

`;


export default PostLayout;