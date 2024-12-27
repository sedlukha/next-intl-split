// const createNextIntlSplitPlugin = require('next-intl-split/plugin'); // For next.config.js
import createNextIntlSplitPlugin from 'next-intl-split/plugin';

const withNextIntlSplit = createNextIntlSplitPlugin('./src/messages');

/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = withNextIntlSplit(nextConfig); // For next.config.js
export default withNextIntlSplit(nextConfig);
