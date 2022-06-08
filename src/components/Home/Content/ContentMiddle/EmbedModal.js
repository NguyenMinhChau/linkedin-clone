import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './ContentMiddle.module.css';

function EmbedModal({
    handleContainersEmbedClick,
    handleContentEmbedClick,
    idPost,
}) {
    const [embed, setEmbed] = useState('');
    const refTextArea = useRef();
    useEffect(() => {
        const url = `https://linkedln-clone-5568b.web.app/embed/feed/update/${idPost}`;
        // const url = `http://localhost:3000/embed/feed/update/${idPost}`;
        setEmbed(url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idPost]);
    useEffect(() => {
        refTextArea.current.select();
        refTextArea.current.addEventListener('click', () => {
            refTextArea.current.select();
        });
    });
    return (
        <div
            className={`${clsx(styles.modal_bg)}`}
            onClick={handleContainersEmbedClick}
        >
            <div
                className={`${clsx(styles.modal_contents)}`}
                onClick={handleContentEmbedClick}
            >
                <div className={`${clsx(styles.modal_top)}`}>
                    <h5 className='mb-3'>Embed this post</h5>
                    <span
                        className={`${clsx(styles.modal_close)}`}
                        onClick={handleContainersEmbedClick}
                    >
                        <i className='fa-solid fa-times'></i>
                    </span>
                </div>
                <div
                    className={`${clsx(
                        styles.modal_middle,
                        styles.modal_middle_sm,
                        styles.modal_middle_tablet
                    )}`}
                >
                    <p className={`${clsx(styles.embed_textarea_decs)}`}>
                        Copy and paste embed code on your site
                    </p>
                    <textarea
                        rows='3'
                        resize='false'
                        id='embed'
                        name='embed'
                        className={`${clsx(styles.embed_textarea)}`}
                        value={`<iframe src="${embed}" height="951" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`}
                        autofocus
                        readOnly
                        spellcheck={false}
                        title='Embed code'
                        ref={refTextArea}
                    ></textarea>
                    <div
                        className={`${clsx(
                            styles.embed_button_copy_code_container
                        )}`}
                    >
                        <CopyToClipboard
                            onCopy={true}
                            text={`<iframe src="${embed}" height="951" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`}
                        >
                            <button
                                className={`${clsx(
                                    styles.embed_button_copy_code
                                )}`}
                            >
                                Copy code
                            </button>
                        </CopyToClipboard>
                    </div>
                    <p className={`${clsx(styles.embed_link_terms_of_use)}`}>
                        <span className>
                            By copying the link above, you agree to the
                        </span>{' '}
                        <Link to='embed-terms-of-use'>
                            LinkedIn Embed Terms of Use.
                        </Link>
                    </p>
                    <div className={`${clsx(styles.embed_divider)}`}></div>
                    <p className={`${clsx(styles.embed_preview)}`}>Preview</p>
                    <Iframe
                        url={`${embed}`}
                        width='100%'
                        height='320px'
                        className={`${clsx(
                            styles.share_modal_middle_content_iframe
                        )}`}
                        onError={(e) => {
                            e.target.url =
                                'https://www.linkedin.com/embed/feed/update/urn:li:share:6930728174032994304';
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default EmbedModal;
