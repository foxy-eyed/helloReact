import { merge, pick, values } from 'lodash/object';
import { fromPairs } from 'lodash/array';

const mapAssets = assets => fromPairs(assets.map(({ fields, sys }) => [sys.id, fields.file.url]));

const parseProducts = (response) => {
  const { body: { items, includes: { Asset } } } = response;

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
};

export default parseProducts;
