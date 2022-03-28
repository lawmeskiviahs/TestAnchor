use anchor_lang::prelude::*;

declare_id!("6MSFh3BFyotuuVyuzfitFQYJ1k9GHSkbZz7KtzbaHiJQ");

#[program]
mod basic_0 {
    use super::*;
    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        msg!("Hello World");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}