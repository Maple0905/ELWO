// export default (imageUrl: string) => `https://s3.eu-north-1.amazonaws.com/cms.elwotools.com${imageUrl}`;

const getImageUrl = (imageUrl: string) => {
return `https://s3.eu-north-1.amazonaws.com/cms.elwotools.com${imageUrl}`;
}

export default getImageUrl;
