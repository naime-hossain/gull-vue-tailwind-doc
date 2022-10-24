(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{404:function(e,t,o){"use strict";o.r(t);var i=o(50),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"usemutation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usemutation"}},[e._v("#")]),e._v(" useMutation")]),e._v(" "),o("h2",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("document")]),e._v(": GraphQL document containing the mutation operation. Can also be a function returning the document.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("options")]),e._v(": (default: "),o("code",[e._v("null")]),e._v(")  Options object. Can also be a function returning an options object.")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("variables")]),e._v(": Variables object.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("awaitRefetchQueries")]),e._v(": By default, "),o("code",[e._v("refetchQueries")]),e._v(" does not wait for the refetched queries to be completed, before resolving the mutation "),o("code",[e._v("Promise")]),e._v(". This ensures that query refetching does not hold up mutation response handling (query refetching is handled asynchronously). Set "),o("code",[e._v("awaitRefetchQueries")]),e._v(" to "),o("code",[e._v("true")]),e._v(" if you would like to wait for the refetched queries to complete, before the mutation can be marked as resolved.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("clientId")]),e._v(": Id of the client that should be used for this mutation if you have provided multiple clients.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("context")]),e._v(": The context to be passed to the link execution chain. This context will only be used with the mutation. It will not be used with "),o("code",[e._v("refetchQueries")]),e._v(". Refetched queries use the context they were initialized with (since the intitial context is stored as part of the "),o("code",[e._v("ObservableQuery")]),e._v(" instance). If a specific context is needed when refetching queries, make sure it is configured (via the "),o("code",[e._v("query")]),e._v(" "),o("code",[e._v("context")]),e._v(" option) when the query is first initialized/run.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("errorPolicy")]),e._v(": Specifies the "),o("code",[e._v("ErrorPolicy")]),e._v(" to be used for this operation.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("none")])]),e._v(" "),o("li",[o("code",[e._v("all")])]),e._v(" "),o("li",[o("code",[e._v("ignore")])])])]),e._v(" "),o("li",[o("p",[o("code",[e._v("fetchPolicy")]),e._v(": Specifies the "),o("code",[e._v("FetchPolicy")]),e._v(" to be used for this mutation.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("cache-first")]),e._v(" (default): return result from cache. Only fetch from network if cached result is not available.")]),e._v(" "),o("li",[o("code",[e._v("cache-and-network")]),e._v(": return result from cache first (if it exists), then return network result once it's available.")]),e._v(" "),o("li",[o("code",[e._v("cache-only")]),e._v(": return result from cache if available, fail otherwise.")]),e._v(" "),o("li",[o("code",[e._v("network-only")]),e._v(": return result from network, fail if network call doesn't succeed, save to cache.")]),e._v(" "),o("li",[o("code",[e._v("no-cache")]),e._v(": return result from network, fail if network call doesn't succeed, don't save to cache.")])])]),e._v(" "),o("li",[o("p",[o("code",[e._v("optimisticResponse")]),e._v(": An object that represents the result of this mutation that will be optimistically stored before the server has actually returned a result. This is most often used for optimistic UI, where we want to be able to see the result of a mutation immediately, and update the UI later if any errors appear.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("refetchQueries")]),e._v(": A list of query names which will be refetched once this mutation has returned. This is often used if you have a set of queries which may be affected by a mutation and will have to update. Rather than writing a mutation query reducer (i.e. "),o("code",[e._v("updateQueries")]),e._v(") for this, you can simply refetch the queries that will be affected and achieve a consistent store once these queries return.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("update")]),e._v(": This function will be called twice over the lifecycle of a mutation. Once at the very beginning if an "),o("code",[e._v("optimisticResponse")]),e._v(" was provided. The writes created from the optimistic data will be rolled back before the second time this function is called which is when the mutation has successfully resolved. At that point update will be called with the actual mutation result and those writes will not be rolled back.")]),e._v(" "),o("p",[e._v("The reason a "),o("code",[e._v("DataProxy")]),e._v(" is provided instead of the user calling the methods directly on "),o("code",[e._v("ApolloClient")]),e._v(" is that all of the writes are batched together at the end of the update, and it allows for writes generated by optimistic data to be rolled back.")]),e._v(" "),o("p",[e._v("Note that since this function is intended to be used to update the store, it cannot be used with a "),o("code",[e._v("no-cache")]),e._v(" fetch policy. If you're interested in performing some action after a mutation has completed, and you don't need to update the store, use the "),o("code",[e._v("Promise")]),e._v(" returned from "),o("code",[e._v("mutate")]),e._v(" instead.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("updateQueries")]),e._v(": A "),o("code",[e._v("MutationQueryReducersMap")]),e._v(", which is map from query names to mutation query reducers. Briefly, this map defines how to incorporate the results of the mutation into the results of queries that are currently being watched by your application.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("throws: 'auto' | 'always' | 'never'")]),e._v(": By default ("),o("code",[e._v("'auto'")]),e._v("), "),o("code",[e._v("mutate")]),e._v(" will throw errors if you don't register an "),o("code",[e._v("onError")]),e._v(" callback.")])])])])]),e._v(" "),o("h2",{attrs:{id:"return"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[e._v("#")]),e._v(" Return")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("mutate(variables, overrideOptions)")]),e._v(": call the mutation with this function.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("loading")]),e._v(": boolean "),o("code",[e._v("Ref")]),e._v(" tracking the progress of the mutation.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("error")]),e._v(": Error "),o("code",[e._v("Ref")]),e._v(" holding any occuring error.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("called")]),e._v(": boolean "),o("code",[e._v("Ref")]),e._v(" holding "),o("code",[e._v("true")]),e._v(" if the mutation was already called.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("onDone")]),e._v(": Event hook called when the mutation successfully completes.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("onError")]),e._v(": Event hook called when an error occurs.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);