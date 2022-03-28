import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TestAnchor } from "../target/types/test_anchor";

describe("TestAnchor", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.TestAnchor as Program<TestAnchor>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
