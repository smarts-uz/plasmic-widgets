// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7bKSoynR3noLe1Sg3WTwkN
// Component: DrdDoHRCdPDn
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7bKSoynR3noLe1Sg3WTwkN/projectcss
import sty from "./PlasmicEmbedHtml.module.css"; // plasmic-import: DrdDoHRCdPDn/css

createPlasmicElementProxy;

export const PlasmicEmbedHtml__VariantProps = new Array();

export const PlasmicEmbedHtml__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicEmbedHtml__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Embed
            data-plasmic-name={"embedHtml"}
            data-plasmic-override={overrides.embedHtml}
            className={classNames("__wab_instance", sty.embedHtml)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "embedHtml"],
  embedHtml: ["embedHtml"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicEmbedHtml__ArgProps,
          internalVariantPropNames: PlasmicEmbedHtml__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEmbedHtml__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmbedHtml";
  } else {
    func.displayName = `PlasmicEmbedHtml.${nodeName}`;
  }
  return func;
}

export const PlasmicEmbedHtml = Object.assign(
  // Top-level PlasmicEmbedHtml renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    embedHtml: makeNodeComponent("embedHtml"),
    // Metadata about props expected for PlasmicEmbedHtml
    internalVariantProps: PlasmicEmbedHtml__VariantProps,
    internalArgProps: PlasmicEmbedHtml__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEmbedHtml;
/* prettier-ignore-end */
