(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{794:function(e,n,o){"use strict";o.r(n);var i=o(1),t=Object(i.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"state"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),o("h2",{attrs:{id:"signing-info-liveness"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#signing-info-liveness"}},[e._v("#")]),e._v(" Signing Info (Liveness)")]),e._v(" "),o("p",[e._v("Every block includes a set of precommits by the validators for the previous block,\nknown as the "),o("code",[e._v("LastCommitInfo")]),e._v(" provided by Tendermint. A "),o("code",[e._v("LastCommitInfo")]),e._v(" is valid so\nlong as it contains precommits from +2/3 of total voting power.")]),e._v(" "),o("p",[e._v("Proposers are incentivized to include precommits from all validators in the Tendermint "),o("code",[e._v("LastCommitInfo")]),e._v("\nby receiving additional fees proportional to the difference between the voting\npower included in the "),o("code",[e._v("LastCommitInfo")]),e._v(" and +2/3 (see "),o("RouterLink",{attrs:{to:"/modules/slashing/x/distribution/spec/03_begin_block.html"}},[e._v("fee distribution")]),e._v(").")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBMYXN0Q29tbWl0SW5mbyBzdHJ1Y3QgewoJUm91bmQgaW50MzIKCVZvdGVzIFtdVm90ZUluZm8KfQo="}}),e._v(" "),o("p",[e._v("Validators are penalized for failing to be included in the "),o("code",[e._v("LastCommitInfo")]),e._v(" for some\nnumber of blocks by being automatically jailed, potentially slashed, and unbonded.")]),e._v(" "),o("p",[e._v("Information about validator's liveness activity is tracked through "),o("code",[e._v("ValidatorSigningInfo")]),e._v(".\nIt is indexed in the store as follows:")]),e._v(" "),o("ul",[o("li",[e._v("ValidatorSigningInfo: "),o("code",[e._v("0x01 | ConsAddrLen (1 byte) | ConsAddress -> ProtocolBuffer(ValSigningInfo)")])]),e._v(" "),o("li",[e._v("MissedBlocksBitArray: "),o("code",[e._v("0x02 | ConsAddrLen (1 byte) | ConsAddress | LittleEndianUint64(signArrayIndex) -> VarInt(didMiss)")]),e._v(" (varint is a number encoding format)")])]),e._v(" "),o("p",[e._v("The first mapping allows us to easily lookup the recent signing info for a\nvalidator based on the validator's consensus address.")]),e._v(" "),o("p",[e._v("The second mapping ("),o("code",[e._v("MissedBlocksBitArray")]),e._v(") acts\nas a bit-array of size "),o("code",[e._v("SignedBlocksWindow")]),e._v(" that tells us if the validator missed\nthe block for a given index in the bit-array. The index in the bit-array is given\nas little endian uint64.\nThe result is a "),o("code",[e._v("varint")]),e._v(" that takes on "),o("code",[e._v("0")]),e._v(" or "),o("code",[e._v("1")]),e._v(", where "),o("code",[e._v("0")]),e._v(" indicates the\nvalidator did not miss (did sign) the corresponding block, and "),o("code",[e._v("1")]),e._v(" indicates\nthey missed the block (did not sign).")]),e._v(" "),o("p",[e._v("Note that the "),o("code",[e._v("MissedBlocksBitArray")]),e._v(" is not explicitly initialized up-front. Keys\nare added as we progress through the first "),o("code",[e._v("SignedBlocksWindow")]),e._v(" blocks for a newly\nbonded validator. The "),o("code",[e._v("SignedBlocksWindow")]),e._v(" parameter defines the size\n(number of blocks) of the sliding window used to track validator liveness.")]),e._v(" "),o("p",[e._v("The information stored for tracking validator liveness is as follows:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVmFsaWRhdG9yU2lnbmluZ0luZm8gZGVmaW5lcyBhIHZhbGlkYXRvcidzIHNpZ25pbmcgaW5mbyBmb3IgbW9uaXRvcmluZyB0aGVpcgovLyBsaXZlbmVzcyBhY3Rpdml0eS4KbWVzc2FnZSBWYWxpZGF0b3JTaWduaW5nSW5mbyB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICAgPSB0cnVlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CgogIHN0cmluZyBhZGRyZXNzID0gMTsKICAvLyBoZWlnaHQgYXQgd2hpY2ggdmFsaWRhdG9yIHdhcyBmaXJzdCBhIGNhbmRpZGF0ZSBPUiB3YXMgdW5qYWlsZWQKICBpbnQ2NCBzdGFydF9oZWlnaHQgPSAyIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O3N0YXJ0X2hlaWdodFwmcXVvdDsmcXVvdDtdOwogIC8vIGluZGV4IG9mZnNldCBpbnRvIHNpZ25lZCBibG9jayBiaXQgYXJyYXkKICBpbnQ2NCBpbmRleF9vZmZzZXQgPSAzIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2luZGV4X29mZnNldFwmcXVvdDsmcXVvdDtdOwogIC8vIHRpbWVzdGFtcCB2YWxpZGF0b3IgY2Fubm90IGJlIHVuamFpbGVkIHVudGlsCiAgZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCBqYWlsZWRfdW50aWwgPSA0CiAgICAgIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2phaWxlZF91bnRpbFwmcXVvdDsmcXVvdDssIChnb2dvcHJvdG8uc3RkdGltZSkgPSB0cnVlLCAoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKICAvLyB3aGV0aGVyIG9yIG5vdCBhIHZhbGlkYXRvciBoYXMgYmVlbiB0b21ic3RvbmVkIChraWxsZWQgb3V0IG9mIHZhbGlkYXRvcgogIC8vIHNldCkKICBib29sIHRvbWJzdG9uZWQgPSA1OwogIC8vIG1pc3NlZCBibG9ja3MgY291bnRlciAodG8gYXZvaWQgc2Nhbm5pbmcgdGhlIGFycmF5IGV2ZXJ5IHRpbWUpCiAgaW50NjQgbWlzc2VkX2Jsb2Nrc19jb3VudGVyID0gNiBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDttaXNzZWRfYmxvY2tzX2NvdW50ZXJcJnF1b3Q7JnF1b3Q7XTsKfQoKLy8gUGFyYW1zIHJlcHJlc2VudHMgdGhlIHBhcmFtZXRlcnMgdXNlZCBmb3IgYnkgdGhlIHNsYXNoaW5nIG1vZHVsZS4KbWVzc2FnZSBQYXJhbXMgew=="}})],1)],1)}),[],!1,null,null,null);n.default=t.exports}}]);