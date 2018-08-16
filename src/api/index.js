import request from 'superagent';
import memoizeOne from 'memoize-one';
import { merge, pick, values } from 'lodash/object';
import { fromPairs } from 'lodash/array';

const apiSpaceId = 'pqsy0bw5e1la';
const apiEndpointUrl = `https://cdn.contentful.com/spaces/${apiSpaceId}/entries`;
const apiToken = 'bbc469159ba14464ab70cc99e55adac38b532065f31638b0aceaf01c83118d10';

const mapAssets = assets => fromPairs(assets.map(({ fields, sys }) => [sys.id, fields.file.url]));

const getProducts = () => request
  .get(apiEndpointUrl)
  .query({ access_token: apiToken, content_type: 'product' })
  .then(({ body: { items, includes: { Asset } } }) => {
    const assets = mapAssets(Asset);
    return items.map((item) => {
      const { fields } = item;
      const assetsIds = fields.gallery.map(asset => asset.sys.id);
      const gallery = values(pick(assets, assetsIds));

      return merge(
        pick(fields, ['id', 'title', 'price', 'description']),
        { gallery },
      );
    });
  });

export default memoizeOne(getProducts);
