/** @jsxImportSource theme-ui */
import Image from 'next/image'
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaPhone } from 'react-icons/fa'
import { Box, Flex, Heading, Link, Text } from 'theme-ui'
import photo from '../assets/photo.jpg'

type ContactInfoType = 'email' | 'website' | 'github' | 'linkedin' | 'tel'

type ContactInfo = Record<ContactInfoType, string>

interface Props extends Partial<ContactInfo> {
  name: string
  photo: string
  occupation?: string
  location?: string
}

const getIcon = (type: ContactInfoType) => {
  switch (type) {
    case 'github': return <FaGithub />
    case 'email': return <FaEnvelope />
    case 'website': return <FaGlobe />
    case 'linkedin': return <FaLinkedin />
    case 'tel': return <FaPhone />
  }
}

const HrefMap: Record<ContactInfoType, (value: string) => string> = {
  github: v => `https://github.com/${v}`,
  email: v => `mailto:${v}`,
  website: v => v,
  linkedin: v => `https://www.linkedin.com/in/${v}`,
  tel: v => `tel:${v}`,
}

const ContactLink = ({ type, value }: { type: ContactInfoType, value: string }) => {
  return (
    <Link href={HrefMap[type](value)} sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.4em',
    }}>
      {getIcon(type)}
      {value}
    </Link>
  )
}

const VCard  = ({
  name,
  occupation,
  location,
  email,
  github,
  website,
  linkedin,
  tel,
}: Props) => {

  return (
    <Flex as='header'
      className='vcard h-card'
      sx={{
        alignItems: 'center',
        flexDirection: ['column', 'row', 'row'],
        py: '2em',
        '@media print': {
          py: '0.8em',
          flexDirection: 'row'
        },
      }}
    >
      <Box sx={{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        display: 'inline-flex',
        borderRadius: '50%',
        border: '5px solid gold',
        borderColor: 'highlight',
      }}>
        <Image src={photo} alt={name} width={200} height={200}
          className='u-photo'
          sx={{
            borderRadius: '50%',
          }}
        />
      </Box>
      <Box sx={{ px: '1em' }}>
        <Heading as='h1' className='p-name' variant='display' sx={{ mt: 0 }}>{name}</Heading>
        {occupation && <Text className='p-job-title' sx={{ color: 'gray' }}>
          {occupation}
          {location &&
            <>
              <span aria-hidden='true'>&middot;</span>
              <span className='p-locality'>{location}</span>
            </>
          }
        </Text>}
        <Flex sx={{ gap: '0.5em', flexWrap: 'wrap' }}>
          {email && <ContactLink type='email' value={email} />}
          {github && <ContactLink type='github' value={github} />}
          {linkedin && <ContactLink type='linkedin' value={linkedin} />}
          {website && <ContactLink type='website' value={website} />}
          {tel && <ContactLink type='tel' value={tel} />}
        </Flex>
      </Box>
    </Flex>
  )
}

export default VCard
