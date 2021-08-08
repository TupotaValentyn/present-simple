import React, { FC } from 'react';
import { PageLayout } from 'components';
import { Grid, makeStyles } from '@material-ui/core';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import BlogCard from 'pages/Blog/components/BlogCard';

type Props = {}

const useClasses = makeStyles(() => {
  return {
    icon: {
      width: 30,
      height: 30,
      transform: 'scale(-1, 1)'
    }
  }
})

const posts = [
  {
    likes: 120,
    title: 'Email phishing',
    content: 'Most phishing messages are delivered by email, and are not personalized or targeted to a specific individual or company–this is termed "bulk" phishing.[8] The content of a bulk phishing message varies widely depending on the goal of the attacker–common targets for impersonation include banks and financial services, email and cloud productivity providers, and streaming services.[9] Attackers may use the credentials obtained to directly steal money from a victim, although compromised accounts are often used instead as a jumping-off point to perform other attacks, such as the theft of proprietary information, the installation of malware, or the spear phishing of other people within the target\'s organization.[3] Compromised streaming service accounts are usually sold directly to consumers on darknet markets.[10]',
    createdAt: '10.08.2021',
    readTime: '2m',
    img: 'https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs'
  },
  {
    likes: 120,
    title: 'Email phishing',
    content: 'Most phishing messages are delivered by email, and are not personalized or targeted to a specific individual or company–this is termed "bulk" phishing.[8] The content of a bulk phishing message varies widely depending on the goal of the attacker–common targets for impersonation include banks and financial services, email and cloud productivity providers, and streaming services.[9] Attackers may use the credentials obtained to directly steal money from a victim, although compromised accounts are often used instead as a jumping-off point to perform other attacks, such as the theft of proprietary information, the installation of malware, or the spear phishing of other people within the target\'s organization.[3] Compromised streaming service accounts are usually sold directly to consumers on darknet markets.[10]',
    createdAt: '10.08.2021',
    readTime: '2m'
  }, {
    likes: 439,
    title: 'Spear phishing',
    content: 'Spear phishing involves an attacker directly targeting a specific organization or person with tailored phishing emails.[11] In contrast to bulk phishing, spear phishing attackers often gather and use personal information about their target to increase their probability of success of the attack.[12][13][14][15] Spear phishing typically targets executives or those that work in financial departments that have access to the organization\'s sensitive financial data and services. A 2019 study showed that accountancy and audit firms are frequent targets for spear phishing owing to their employees\' access to information that could be valuable to criminals. [16]',
    createdAt: '10.08.2021',
    readTime: '5m'
  }, {
    likes: 120,
    title: 'Whaling and CEO fraud',
    content: 'Whaling refers to spear phishing attacks directed specifically at senior executives and other high-profile targets.[19] The content will be likely crafted to be of interest to the person or role targeted - such as a subpoena or customer complaint.[20]',
    createdAt: '10.08.2021',
    readTime: '4m'
  },

]

const Blog: FC<Props> = () => {
  const classes = useClasses();

  return <PageLayout title="Blog" icon={<MessageOutlinedIcon className={classes.icon} />}>
    <Grid container spacing={3}>
      {posts.map((post) => <BlogCard {...post} />)}
    </Grid>
  </PageLayout>
};

export default Blog
