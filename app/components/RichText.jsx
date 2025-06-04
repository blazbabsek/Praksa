import React from 'react';
import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react';

const RichText = ({ content }) => {
  return <LexicalRichText content={content} />;
};

export default RichText;
