// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7bKSoynR3noLe1Sg3WTwkN
// Component: mMM3KbXlmgw7
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
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7bKSoynR3noLe1Sg3WTwkN/projectcss
import sty from "./PlasmicReveal.module.css"; // plasmic-import: mMM3KbXlmgw7/css

createPlasmicElementProxy;

export const PlasmicReveal__VariantProps = new Array();

export const PlasmicReveal__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicReveal__RenderFunc(props) {
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
          <Reveal
            data-plasmic-name={"reveal"}
            data-plasmic-override={overrides.reveal}
            cascade={false}
            className={classNames("__wab_instance", sty.reveal)}
            duration={20000}
            triggerOnce={true}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__uJpyp)}
              displayHeight={"100px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100px"}
              src={{
                src: "/plasmic/plasmic_widget/images/logojpg.jpg",
                fullWidth: 1280,
                fullHeight: 1271,
                aspectRatio: undefined
              }}
            />
          </Reveal>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img___2Yi65)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/plasmic_widget/images/logojpg.jpg",
              fullWidth: 1280,
              fullHeight: 1271,
              aspectRatio: undefined
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "reveal"],
  reveal: ["reveal"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicReveal__ArgProps,
          internalVariantPropNames: PlasmicReveal__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReveal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReveal";
  } else {
    func.displayName = `PlasmicReveal.${nodeName}`;
  }
  return func;
}

export const PlasmicReveal = Object.assign(
  // Top-level PlasmicReveal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reveal: makeNodeComponent("reveal"),
    // Metadata about props expected for PlasmicReveal
    internalVariantProps: PlasmicReveal__VariantProps,
    internalArgProps: PlasmicReveal__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicReveal;
/* prettier-ignore-end */