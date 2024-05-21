// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7bKSoynR3noLe1Sg3WTwkN
// Component: q5X-V3cDSK7u
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { RichLayout } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-layout";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7bKSoynR3noLe1Sg3WTwkN/projectcss
import sty from "./PlasmicAppLayout.module.css"; // plasmic-import: q5X-V3cDSK7u/css

createPlasmicElementProxy;

export const PlasmicAppLayout__VariantProps = new Array();

export const PlasmicAppLayout__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAppLayout__RenderFunc(props) {
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
          <RichLayout
            data-plasmic-name={"richAppLayout"}
            data-plasmic-override={overrides.richAppLayout}
            className={classNames("__wab_instance", sty.richAppLayout)}
            logoElement={
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"80px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"80px"}
                src={{
                  src: "/plasmic/plasmic_widget/images/freeEuroCoinIcon2141Thumbpng.png",
                  fullWidth: 512,
                  fullHeight: 512,
                  aspectRatio: undefined
                }}
              />
            }
            navMenuItems={(() => {
              const __composite = [
                { path: "/", name: "Home" },
                { path: null, name: null },
                { path: null, name: null }
              ];

              __composite["1"]["path"] = `/table`;
              __composite["1"]["name"] = "Table";
              __composite["2"]["path"] = `/chart`;
              __composite["2"]["name"] = "Chart";
              return __composite;
            })()}
            title={"MySite"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "richAppLayout", "img"],
  richAppLayout: ["richAppLayout", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAppLayout__ArgProps,
          internalVariantPropNames: PlasmicAppLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAppLayout";
  } else {
    func.displayName = `PlasmicAppLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicAppLayout = Object.assign(
  // Top-level PlasmicAppLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    richAppLayout: makeNodeComponent("richAppLayout"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicAppLayout
    internalVariantProps: PlasmicAppLayout__VariantProps,
    internalArgProps: PlasmicAppLayout__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAppLayout;
/* prettier-ignore-end */
