// Used for calculations
var defaultWidth = 320;

var STYLES = {

  Wrapper: {},
  Containers: {
    DefaultStyle: {
      fontFamily: 'inherit',
      position: 'fixed',
      width: defaultWidth,
      padding: '0 10px',
      zIndex: 9998,
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      overflow: 'hidden'
    },

    tl: {
      top: "0px",
      bottom: "auto",
      left: '0px',
      right: 'auto'
    },

    tr: {
      top: "0px",
      bottom: "auto",
      left: 'auto',
      right: '0px'
    },

    tc: {
      top: "0px",
      bottom: "auto",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth/2)
    },

    bl: {
      top: "auto",
      bottom: "0px",
      left: '0px',
      right: 'auto'
    },

    br: {
      top: "auto",
      bottom: "0px",
      left: 'auto',
      right: '0px'
    },

    bc: {
      top: "auto",
      bottom: "0px",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth/2)
    }

  },

  NotificationItem: {
    DefaultStyle: {
      position: 'relative',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '14px',
      border: '1px solid black',
      margin: '10px 0',
      padding: '10px',
      display: 'block',
      width: '100%',
      backgroundColor: '#FFF',
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      WebkitBoxShadow: '0px 0px 5px 2px rgba(0,0,0,0.1)',
      MozBoxShadow: '0px 0px 5px 2px rgba(0,0,0,0.1)',
      boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.1)'

    },

    success: {
      borderColor: '#36c646'
    },

    error: {
      borderColor: '#ec3d3d'
    },

    warning: {
      borderColor: '#eabf16'
    },

    info: {
      borderColor: '#369cc7'
    }
  },

  MessageWrapper: {},

  Dismiss: {
    DefaultStyle: {
      fontSize: '16px',
      position: 'absolute',
      top: '1px',
      right: '5px',
      lineHeight: '100%'
    },

    success: {
      color: '#36c646'
    },

    error: {
      color: '#ec3d3d'
    },

    warning: {
      color: '#eabf16'
    },

    info: {
      color: '#369cc7'
    }
  },

  Action: {
    DefaultStyle: {
      background: '#ffffff',
      borderWidth: '1px 1px 1px 4px',
      borderStyle: 'solid',
      padding: '6px',
      fontWeight: 'bold',
      margin: '10px 0 0 0'
    },

    success: {
      borderColor: '#36c646'
    },

    error: {
      borderColor: '#ec3d3d'
    },

    warning: {
      borderColor: '#eabf16'
    },

    info: {
      borderColor: '#369cc7'
    }
  },

  ActionWrapper: {}
};

module.exports = STYLES;
