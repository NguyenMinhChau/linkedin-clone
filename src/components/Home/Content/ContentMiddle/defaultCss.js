/* eslint-disable import/no-anonymous-default-export */
export default {
    control: {
        backgroundColor: 'transparent',
        fontSize: 18,
        fontWeight: 'normal',
    },

    highlighter: {
        overflow: 'hidden',
    },

    input: {
        margin: 0,
        color: '#fff',
    },

    '&singleLine': {
        control: {
            display: 'inline-block',
            width: 130,
        },

        highlighter: {
            padding: 1,
            border: '2px inset transparent',
        },

        input: {
            padding: 1,
            border: '2px inset',
        },
    },

    '&multiLine': {
        control: {
            fontFamily: 'Times New Roman, Times, serif',
        },

        highlighter: {
            padding: 9,
        },

        input: {
            padding: 9,
            minHeight: 150,
            outline: 0,
            border: 0,
            maxHeight: 100,
            overflow: 'auto',
            position: 'absolute',
            bottom: 14,
        },
    },

    suggestions: {
        list: {
            backgroundColor: 'white',
            border: '1px solid rgba(0,0,0,0.15)',
            fontSize: 12,
            overflowX: 'auto',
            maxHeight: 150,
            minWidth: 200,
            color: '#000',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            borderRadius: 5,
        },

        item: {
            padding: '5px 15px',
            borderBottom: '1px solid rgba(0,0,0,0.15)',
            transition: 'all .1s',

            '&focused': {
                backgroundColor: '#0077d3',
                color: 'white',
            },
        },
    },
};
