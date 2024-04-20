import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductLenseSpecs extends Schema.Component {
  collectionName: 'components_product_lense_specs';
  info: {
    displayName: 'Lense Specs';
    icon: 'eye';
    description: '';
  };
  attributes: {
    width: Attribute.Integer;
    height: Attribute.Integer;
    curve: Attribute.String;
    material: Attribute.String;
    polarized: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    anti_reflective: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ProductList extends Schema.Component {
  collectionName: 'components_product_lists';
  info: {
    displayName: 'list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    stripe_url: Attribute.String & Attribute.Required;
    name: Attribute.String;
    thumbnail_xs: Attribute.Media & Attribute.Required;
    slider: Attribute.Media;
  };
}

export interface ProductSize extends Schema.Component {
  collectionName: 'components_product_sizes';
  info: {
    displayName: 'Frame Specs';
    icon: 'magic';
    description: '';
  };
  attributes: {
    temple: Attribute.Integer;
    bridge: Attribute.Integer;
    material: Attribute.String;
    dimensions: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.lense-specs': ProductLenseSpecs;
      'product.list': ProductList;
      'product.size': ProductSize;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
