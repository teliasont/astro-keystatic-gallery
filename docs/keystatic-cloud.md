# Connecting to Keystatic Cloud

Right now this site uses Keystatic's `local` storage. Edits made at `/keystatic` are saved to files on your machine, and you commit them yourself. Connecting to [Keystatic Cloud](https://keystatic.cloud) lets you edit content on the **deployed** site. Each save becomes a commit to your GitHub repo, and editors sign in with a Keystatic Cloud account instead of needing GitHub access.

## Before you start

- **Your own GitHub repo.** If you're working from the template, fork it or push a copy to your account first. Keystatic Cloud commits to whichever repo you connect it to.
- **Keystatic Cloud** account. Sign up at [keystatic.cloud](https://keystatic.cloud) and create a team. You can invite other editors to the team, and they don't need GitHub access.

## 1. Create a team and project

1. Log into [keystatic.cloud](https://keystatic.cloud).
2. Create a **team**. Access is granted at the team level, so anyone you invite to the team can edit.
3. Create a **project** inside the team, then connect it to your GitHub repository when prompted. If the repo belongs to a GitHub organization, an org owner may need to approve the Keystatic app before your repo shows up.
4. Open the project's **Settings** page. It has a ready-to-paste config snippet that includes your `team/project` identifier.

## 2. Update `keystatic.config.ts`

Replace the identifier from your project's settings page `project: 'your-team/your-project'`. The rest of the config stays the same.:

```ts
export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'your-team/your-project',
  },
  // ...ui and collections stay the same
});
```


## 3. Commit, push, and deploy

* Deploy your site from CloudFlare. 

## 4. Edit on the live site

1. Go to `https://<your-site>/keystatic`.
2. Sign in with your Keystatic Cloud account.
3. Create or edit a gallery and save it. Keystatic commits the change to GitHub, your host rebuilds, and the new content goes live a minute or two later.

## Things to know

- **Pull before you work locally.** Edits made on the live site land on GitHub, not on your machine. Run `git pull` before you change content or code locally, or you'll get merge conflicts.
- **Inviting editors.** Add people to your team on keystatic.cloud. They don't need a GitHub account or write access to the repo.

## References
- [Keystatic Cloud docs](https://keystatic.com/docs/cloud)
- [Astro Node adapter](https://docs.astro.build/en/guides/integrations-guide/node/)
