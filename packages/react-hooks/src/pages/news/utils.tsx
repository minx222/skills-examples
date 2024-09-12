import React, { type Component, Suspense } from "react"

const fetchComponent = async (name: string) => {
  const text = await fetch(
    name
  ).then((a) => {
    if (!a.ok) {
      throw new Error('Network response was not ok')
    }
    return a.text()
  })
  const module = getParsedModule(text)
  return { default: module.exports } as unknown as Component
}


const packages = {
  react: React,
}

const getParsedModule = (code: string) => {
  const module = {
    exports: {},
  }
  const require = (name: string) => {
    return packages[name as 'react']
  }
  Function('require, exports, module', code)(require, module.exports, module)
  return module
}



const DynamicComponent = (props: {
	url: string;
 }) => {
	const { url, ...attrs } = props
  const Component = useMemo(() => {
    return React.lazy(async () => fetchComponent(url))
  }, [name])

  return (
    <Suspense
      fallback={
        <div style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <span style={{fontSize: 50}}>Loading...</span>
        </div>
      }>
      <Component {...attrs} />
    </Suspense>
  )
}

export default React.memo(DynamicComponent)
