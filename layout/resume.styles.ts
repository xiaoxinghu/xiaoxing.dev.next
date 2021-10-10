import type { GlobalProps } from '@emotion/react'
import type { Theme } from 'theme-ui'

export const theme: Theme = {
  text: {
    heading: {
      mb: 0,
    },
  },
  styles: {
    h2: {
      fontWeight: 200,
      color: 'secondary',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray',
    },
  }
}

// @ts-ignore
const styles: GlobalProps["styles"] = (theme: Theme) => {
  return {
    h2: {
      '@media print': {
        // margin: '-10px',
      }
    },
    'ul.skills': {
      display: 'flex',
      gap: '1em',
      flexWrap: 'wrap',
      paddingInlineStart: 0,
    },
    'ul.skills>li': {
      display: 'block',
      padding: '0.2em 0.8em',
      border: `1px solid ${theme.colors.gray}`,
      // borderRadius: '0.4em',
      boxShadow: `3px 3px ${theme.colors.gray}`,
      // color: theme.colors.primary,
    },
    '.h-event': {
      position: 'relative',
      paddingLeft: '1.5rem',
      // borderLeft: '2px solid black',
      // background: 'gold',
      '&::before': {
        content: `''`,
        display: 'block',
        width: '6px',
        bottom: 0,
        // height: '0.625rem',
        borderRadius: '3px',
        backgroundColor: theme.colors.highlight,
        position: 'absolute',
        top: 0,
        left: 0,
        // transform: 'translate(-50%, 0)',
      }
    },
    '.p-experince': {
      position: 'relative',
    },
    'dt': {
      // fontWeight: 'bold',
      fontSize: theme.fontSizes[3],
    },
    'dd': {
      color: theme.colors.gray,
      marginInlineStart: '1em',
    },
    '.page-break-before': {
      pageBreakBefore: 'always',
    }
  }
}

export default styles
