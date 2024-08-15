type integer = number;
type float = number;

/**
 * Represent a beatmap.
 */
export type Beatmap = {
  beatmapset_id: integer
  difficulty_rating: float
  id: integer
  mode: Ruleset
  /**
   * See Rank status for list of possible values.
   */
  status: string
  total_length: integer
  user_id: integer
  version: string
  /**
   * {@link Beatmapset} for {@link Beatmap} object, {@link BeatmapsetExtended} for {@link BeatmapExtended} object.
   * null if the beatmap doesn't have associated beatmapset *(e.g. deleted)*.
   */
  beatmapset?: Beatmapset | BeatmapsetExtended
  checksum?: string
  failtimes?: Failtimes
  max_combo?: integer
}

/**
 * All fields are optional but there's always at least **one** field returned.
 */
export type Failtimes = {
  /**
   * Array of length 100.
   */
  exit?: integer[]
  /**
   * Array of length 100.
   */
  fail?: integer[]
}

/**
 * Represent beatmap difficulty attributes.
 * Following fields are always present and then there are additional fields for different rulesets.
 */
export type BeatmapDifficultyAttributes = {
  max_combo: integer
  star_rating: float
  aim_difficulty: float
  flashlight_difficulty: float
  overall_difficulty: float
  slider_factor: float
  speed_difficulty: float
  stamina_difficulty: float
  rhythm_difficulty: float
  colour_difficulty: float
  approach_rate: float
  great_hit_window: float
  score_multiplier: float
}

/**
 * Represent a beatmap. This extends {@link Beatmap} with additional attributes.
 */
export type BeatmapExtended = {
  accuracy: float
  ar: float
  beatmapset_id: integer
  bpm?: float
  convert: boolean
  count_circles: integer
  count_sliders: integer
  count_spinners: integer
  cs: float
  deleted_at?: Timestamp
  drain: float
  hit_length: integer
  is_scoreable: boolean
  last_updated: Timestamp
  mode_int: integer
  passcount: integer
  playcount: integer
  /**
   * See {@link RankStatus} for list of possible values.
   */
  ranked: RankStatus
  url: string
}

/**
 * Represent a beatmap pack.
 */
export type BeatmapPack = {
  author: string
  date: Timestamp
  name: string
  /**
   * Whether difficulty reduction mods may be used to clear the pack.
   */
  no_diff_reduction: boolean
  ruleset_id: integer
  /**
   * The tag of the beatmap pack.
   * Starts with a character representing the type (See the Tag column of BeatmapPackType) followed by an integer.
   */
  tag: string
  /**
   * The download url of the beatmap pack.
   */
  url: string
  beatmapsets?: Beatmapset[]
  user_completion_data: {
    /**
     * IDs of beatmapsets completed by the user (according to the requirements of the pack)
     */
    beatmapset_ids?: integer[]
    /**
     * Whether all beatmapsets are completed or not
     */
    completed?: boolean
  }
}

/**
 * Available beatmap pack types
 */
export enum BeatmapPackType {
  /**
   * Standard
   */
  standard = "S",
  /**
   * Featured Artist
   */
  featured = "F",
  /**
   * Tournament
   */
  tournament = "P",
  /**
   * Project Loved
   */
  loved = "L",
  /**
   * Spotlights
   */
  chart = "R",
  /**
   * Theme
   */
  theme = "T",
  /**
   * Artist/Album
   */
  artist = "A"
}

/**
 * Represent the playcount of a beatmap.
 */
export type BeatmapPlaycount = {
  beatmap_id: integer
  beatmap?: Beatmap
  beatmapset?: Beatmapset
  count: integer
}

export type BeatmapScores = {
  /**
   * The list of top scores for the beatmap in descending order.
   */
  scores: Score[]
  /**
   * The score of the current user.
   * This is not returned if the current user does not have a score.
   *
   * **Note:** will be moved to `user_score` in the future
   */
  userScore?: BeatmapUserScore
}

export type BeatmapUserScore = {
  /**
   * The position of the score within the requested beatmap ranking.
   */
  position: integer
  /**
   * The details of the score.
   */
  score: Score
}

/**
 * Represents a beatmapset.
 */
export type Beatmapset = {
  artist: string
  artist_unicode: string
  covers: Covers
  creator: string
  favourite_count: integer
  id: integer
  nsfw: boolean
  offset: integer
  play_count: integer
  preview_url: string
  source: string
  status: string
  spotlight: boolean
  title: string
  title_unicode: string
  user_id: integer
  video: boolean
  beatmaps?: (Beatmap | BeatmapExtended)[]
  converts?: unknown
  current_nominations?: Nomination[]
  current_user_attributes?: unknown
  description?: unknown
  discussions?: unknown
  events?: unknown
  genre?: unknown
  has_favourited?: boolean
  language?: unknown
  nominations?: unknown
  pack_tags?: string[]
  ratings?: unknown
  recent_favourites?: unknown
  related_users?: unknown
  user?: unknown
  track_id?: integer
}

export type Covers = {
  cover: string
  "cover@2x": string
  card: string
  "card@2x": string
  list: string
  "list@2x": string
  slimcover: string
  "slimcover@2x": string
}

/**
 * The possible values are denoted either as integer or string.
 */
export enum RankStatus {
  graveyard = -2,
  wip,
  pending,
  ranked,
  approved,
  qualified,
  loved
}

/**
 * Represents a Beatmapset modding discussion.
 */
export type BeatmapsetDiscussion = {
  beatmap?: Beatmap
  beatmap_id?: integer
  beatmapset?: Beatmapset
  beatmapset_id: integer
  can_be_resolved: boolean
  can_grant_kudosu: boolean
  created_at: Timestamp
  current_user_attributes: CurrentUserAttributes
  deleted_at?: Timestamp
  deleted_by_id?: integer
  id: integer
  kudosu_denied: boolean
  last_post_at: Timestamp
  message_type: MessageType
  parent_id?: integer
  posts?: BeatmapsetDiscussionPost[]
  resolved: boolean
  starting_post?: BeatmapsetDiscussionPost
  timestamp?: integer
  updated_at: Timestamp
  user_id: integer
}

/**
 * It is not noted either it's `type` or `enum`, assuming it's `enum`.
 */
export enum MessageType {
  hype,
  mapper_note,
  praise,
  problem,
  review,
  suggestion
}

/**
 * Represents a post in a {@link BeatmapsetDiscussion}.
 */
export type BeatmapsetDiscussionPost = {
  beatmapset_discussion_id: integer
  created_at: Timestamp
  deleted_at?: Timestamp
  deleted_by_id?: integer
  id: integer
  last_editor_id?: integer
  message: string
  system: boolean
  updated_at: Timestamp
  user_id: integer
}

/**
 * Represents a vote on a {@link BeatmapsetDiscussion}.
 */
export type BeatmapsetDiscussionVote = {
  beatmapset_discussion_id: integer
  created_at: Timestamp
  id: integer
  score: integer
  updated_at: Timestamp
  user_id: integer
}

/**
 * Represents a beatmapset.
 * This extends {@link Beatmapset} with additional attributes.
 */
export type BeatmapsetExtended = Beatmapset & {
  availability: {
    download_disabled: boolean
    more_information?: string
  }
  bpm: float
  can_be_hyped: boolean
  deleted_at?: Timestamp
  /**
   * @deprecated all beatmapsets now have discussion enabled.
   */
  discussion_enabled: boolean
  discussion_locked: boolean
  hype: {
    current: integer
    required: integer
  }
  is_scoreable: boolean
  last_updated: Timestamp
  legacy_thread_url?: string
  nominations_summary: {
    current: integer
    required: integer
  }
  /**
   * See {@link RankStatus} for list of possible values.
   */
  ranked: RankStatus
  ranked_date?: Timestamp
  source: string
  storyboard: boolean
  submitted_date?: Timestamp
  tags: string
  has_favourited: boolean
}

export type Build = {
  created_at: Timestamp
  display_version: string
  id: integer
  update_stream?: UpdateStream
  users: integer
  version?: string
  youtube_id?: string
  /**
   * If the build has no changelog entries, a placeholder is generated.
   */
  changelog_entries?: ChangelogEntry[]
  versions?: Versions
}

export type Versions = {
  next?: Build
  previous?: Build
}

export type ChangelogEntry = {
  category: string
  created_at?: Timestamp
  github_pull_request_id?: integer
  github_url?: string
  id?: integer
  major: boolean
  repository?: string
  title?: string
  type: string
  url?: string
  /**
   * If the changelog entry has no GitHub user, a placeholder is generated.
   */
  github_user?: GithubUser
  /**
   * Entry message in Markdown format. Embedded HTML is allowed.
   */
  message?: string
  /**
   * Entry message in HTML format.
   */
  message_html?: string
}

/**
 * Represents an individual chat "channel" in the game.
 */
export type ChatChannel = {
  channel_id: integer
  name: string
  description?: string
  /**
   * display icon for the channel
   */
  icon?: string
  /**
   * type of channel
   */
  type: ChannelType
  message_length_limit: integer
  /**
   * user can't send message when the value is true
   */
  moderated: boolean
  /**
   * value from requests that is relayed back to the sender.
   */
  uuid?: string
  /**
   * only present on some responses
   */
  current_user_attributes?: CurrentUserAttributes
  /**
   * @deprecated use current_user_attributes.last_read_id.
   */
  last_read_id?: integer
  /**
   * message_id of last known message (only returned in presence responses)
   */
  last_message_id?: integer
  /**
   * @deprecated up to 50 most recent messages
   */
  recent_messages?: ChatMessage[]
  /**
   * array of user_id that are in the channel (not included for PUBLIC channels)
   */
  users?: integer[]
}

/**
 * For PMs, two factors are taken into account:
 *
 * - Is either user blocking the other? If so, deny.
 * - Does the target only accept PMs from friends? Is the current user a friend? If not, deny.
 *
 * (i) Public channels, group chats and private DMs are all considered "channels".
 */
export enum ChannelType {
  PUBLIC,
  /**
   * is player in the allowed groups? (channel.allowed_groups)
   */
  PRIVATE,
  /**
   * is player currently in the mp game?
   */
  MULTIPLAYER,
  SPECTATOR,
  /**
   * @deprecated
   */
  TEMPORARY,
  /**
   * see below (user_channels)
   */
  PM,
  /**
   * is player in channel? (user_channels)
   */
  GROUP,
  /**
   * is user in the announce group?
   */
  ANNOUNCE
}

/**
 * Represents an individual Message within a ChatChannel.
 */
export type ChatMessage = {
  /**
   * channel_id of where the message was sent
   */
  channel_id: integer
  /**
   * message content
   */
  content: string
  /**
   * was this an action? i.e. /me dances
   */
  is_action: boolean
  /**
   * unique identifier for message
   */
  message_id: integer
  /**
   * user_id of the sender
   */
  sender_id: integer
  /**
   * when the message was sent, ISO-8601
   */
  timestamp: Timestamp
  /**
   * type of message; 'action', 'markdown' or 'plain'
   */
  type: string
  /**
   * message identifier originally sent by client
   */
  uuid?: string
  /**
   * embedded User object to save additional api lookups
   */
  sender?: User
}

/**
 * Represents a single comment.
 */
export type Comment = {
  /**
   * ID of the object the comment is attached to
   */
  commentable_id: integer
  /**
   * type of object the comment is attached to
   */
  commentable_type: string
  /**
   * ISO 8601 date
   */
  created_at: Timestamp
  /**
   * ISO 8601 date if the comment was deleted; null, otherwise
   */
  deleted_at?: Timestamp
  /**
   * ISO 8601 date if the comment was edited; null, otherwise
   */
  edited_at?: Timestamp
  /**
   * user id of the user that edited the post; null, otherwise
   */
  edited_by_id?: integer
  /**
   * the ID of the comment
   */
  id: integer
  /**
   * username displayed on legacy comments
   */
  legacy_name?: string
  /**
   * markdown of the comment's content
   */
  message?: string
  /**
   * html version of the comment's content
   */
  message_html?: string
  /**
   * ID of the comment's parent
   */
  parent_id?: integer
  /**
   * Pin status of the comment
   */
  pinned: boolean
  /**
   * Number of replies to the comment
   */
  replies_count: integer
  /**
   * ISO 8601 date
   */
  updated_at: Timestamp
  /**
   * user ID of the poster
   */
  user_id: integer
  /**
   * Number of votes
   */
  votes_count: integer
}

/**
 * Comments and related data.
 */
export type CommentBundle = {
  /**
   * ID of the object the comment is attached to
   */
  commentable_meta: CommentableMeta[]
  /**
   * Array of comments ordered according to sort
   */
  comments: Comment[]
  cursor: Cursor
  /**
   * If there are more comments or replies available
   */
  has_more: boolean
  has_more_id?: integer
  /**
   * Related comments; e.g. parent comments and nested replies
   */
  included_comments: Comment[]
  /**
   * Pinned comments
   */
  pinned_comments?: Comment[]
  /**
   * one of the CommentSort types
   */
  sort: string
  /**
   * Number of comments at the top level. Not returned for replies.
   */
  top_level_count?: integer
  /**
   * Total number of comments. Not retuned for replies.
   */
  total?: integer
  /**
   * is the current user watching the comment thread?
   */
  user_follow: boolean
  /**
   * IDs of the comments in the bundle the current user has upvoted
   */
  user_votes: integer[]
  /**
   * array of users related to the comments
   */
  users: User[]
}

/**
 * Available sort types are `new`, `old`, `top`.
 *
 * **Building cursor for comments listing**
 *
 * The returned response will be for comments after the specified sort fields.
 *
 * For example, use last loaded comment for the fields value to load more comments.
 * Also make sure to use same `sort` and `parent_id` values.
 */
export enum CommentSort {
  /**
   * created_at (descending), id (descending)
   */
  New = "new",
  /**
   * created_at (ascending), id (ascending)
   */
  Old = "old",
  /**
   * votes_count (descending), created_at (descending), id (descending)
   */
  Top = "top"
}

/**
 * Metadata of the object that a comment is attached to.
 */
export type CommentableMeta = {
  current_user_attributes?: CurrentUserAttributes
  /**
   * the ID of the object
   */
  id?: integer
  /**
   * User ID which owns the object
   */
  owner_id?: integer
  /**
   * Object owner type, used for display (MAPPER for beatmapset)
   */
  owner_title?: string
  /**
   * display title
   */
  title?: string
  /**
   * the type of the object
   */
  type?: string
  /**
   * url of the object
   */
  url?: string
}

/**
 * An object listing various related permissions and states for the current user, related to the object it is attached to.
 */
export type CurrentUserAttributes = {
  /**
   * null if current user can comment on it, reason sentence otherwise
   */
  can_new_comment_reason?: string | null
}

export enum BeatmapsetDiscussionPermissions {
  /**
   * Can delete the discussion.
   */
  can_destroy,
  /**
   * Can reopen the discussion.
   */
  can_reopen,
  /**
   * Can allow or deny kudosu.
   */
  can_moderate_kudosu,
  /**
   * Can resolve the discussion.
   */
  can_resolve,
  /**
   * Current vote given to the discussion.
   */
  vote_score
}

export type ChatChannelUserAttributes = {
  /**
   * Can send messages to this channel.
   */
  can_message: boolean
  /**
   * Reason messages cannot be sent to this channel
   */
  can_message_error?: string
  /**
   * message_id of last message read.
   */
  last_read_id: integer
}

/**
 * A structure included in some API responses containing the parameters to get the next set of results.
 *
 * The values of the cursor should be provided to next request of the same endpoint to get the next set of results.
 *
 * If there are no more results available, a cursor with a value of `null` is returned: `"cursor": null`.
 *
 * Note that `sort` option should also be specified for it to work.
 *
 * @deprecated This pagination parameter is being deprecated and replaced with CursorString.
 */
export type Cursor = CursorString

/**
 * A string value included in some API responses containing the parameter to get the next set of results.
 *
 * Its value will be `null` *(or not defined)* if there are no more results available.
 *
 * Note that all parameters used in previous request also need to be passed.
 */
export type CursorString = { [query: string]: string | integer }

export type ForumPost = {
  created_at: Timestamp
  deleted_at?: Timestamp
  edited_at?: Timestamp
  edited_by_id?: integer
  forum_id: integer
  id: integer
  topic_id: integer
  user_id: integer
  body: {
    /**
     * Post content in HTML format.
     */
    html: string
    /**
     * Post content in BBCode format.
     */
    raw: string
  }
}

export type ForumTopic = {
  created_at: Timestamp
  deleted_at?: Timestamp
  first_post_id: integer
  forum_id: integer
  id: integer
  is_locked: boolean
  last_post_id: integer
  poll?: Poll
  post_count: integer
  title: string
  type: "normal" | "sticky" | "announcement"
  updated_at: Timestamp
  user_id: integer
}

export type Poll = {
  allow_vote_change: boolean
  ended_at?: Timestamp
  hide_incomplete_results: boolean
  last_vote_at?: Timestamp
  max_votes: integer
  options: PollOption[]
  started_at: Timestamp
  title: {
    bbcode: string
    html: string
  }
  total_vote_count: integer
}

export type PollOption = {
  /**
   * Unique only per-topic.
   */
  id: integer
  text: {
    bbcode: string
    html: string
  }
  /**
   * Not present if the poll is incomplete and results are hidden.
   */
  vote_count?: integer
}

export type GithubUser = {
  display_name: string
  github_url?: string
  github_username?: string
  id?: integer
  osu_username?: string
  user_id?: integer
  user_url?: string
}

/**
 * This object is not returned by any endpoints yet. It is here only as a reference for {@link UserGroup}.
 */
export type Group = {
  colour?: string
  /**
   * Whether this group displays a listing at `/groups/{id}`.
   */
  has_listing: boolean
  /**
   * Whether this group associates Rulesets with users' memberships.
   */
  has_playmodes: boolean
  id: integer
  /**
   * Unique string to identify the group.
   */
  identifier: string
  /**
   * Whether members of this group are considered probationary.
   */
  is_probationary: boolean
  name: string
  /**
   * Short name of the group for display.
   */
  short_name: string
  description?: Description
}

export type Description = {
  html: string
  markdown: string
}

export type KudosuHistory = {
  id: integer
  /**
   * One of give, vote.give, reset, vote.reset, revoke, or vote.revoke.
   */
  action: string
  amount: integer
  /**
   * Object type which the exchange happened on (forum_post, etc).
   */
  model: string
  created_at: Timestamp
  /**
   * Simple detail of the user who started the exchange.
   */
  giver?: Giver
  /**
   * Simple detail of the object for display.
   */
  post: Post
}

export type Giver = {
  url: string
  username: string
}

export type Post = {
  /**
   * Url of the object.
   */
  url?: string
  /**
   * Title of the object. It'll be `"[deleted beatmap]"` for deleted beatmaps.
   */
  title: string
}

export type Match = {
  id: integer
  start_time: Timestamp
  end_time?: Timestamp
  name: string
}

export type MatchEvent = {
  id: integer
  detail: {
    type: MatchEventType
    text: string
  }
  timestamp: Timestamp
  user_id?: integer
  /**
   * The game associated with the MatchEvent
   */
  game?: MatchGame
}

export enum MatchEventType {
  HostChanged = "host-changed",
  MatchCreated = "match-created",
  MatchDisbanded = "match-disbanded",
  Other = "other",
  PlayerJoined = "player-joined",
  PlayerKicked = "player-kicked",
  PlayerLeft = "player-left"
}

export type MatchGame = {
  id: integer
  /**
   * Includes beatmapset.
   */
  beatmap: Beatmap
  beatmap_id: integer
  start_time: Timestamp
  end_time?: Timestamp
  mode: Ruleset
  mode_int: integer
  /**
   * Mod combination used for this match game as an array of mod acronyms.
   */
  mods: string[]
  /**
   * List of scores set by each player for this match game.
   */
  scores: Score[]
  scoring_type: ScoringType
  team_type: TeamType
}

export enum ScoringType {
  Accuracy = "accuracy",
  Combo = "combo",
  Score = "score",
  ScoreV2 = "scorev2"
}

export enum TeamType {
  HeadToHead = "head-to-head",
  TagCoop = "tag-coop",
  TagTeamVS = "tag-team-vs",
  TeamVS = "team-vs"
}

/**
 * An object which contains scores and related data for fetching next page of the result.
 */
export type MultiplayerScores = {
  /**
   * To be used to fetch the next page.
   */
  cursor_string: CursorString
  /**
   * Parameters used for score listing.
   */
  params: object
  scores: Score[]
  /**
   * Index only. Total scores of the specified playlist item.
   */
  total?: integer
  /**
   * Index only. Score of the accessing user if exists.
   */
  user_score?: Score
}

export type MultiplayerScoresAround = {
  higher: MultiplayerScores
  lower: MultiplayerScores
}

/**
 * An object which contains pointer for fetching further results of a request.
 * It depends on the sort option.
 */
export type MultiplayerScoresCursor = {
  /**
   * Last score id of current result (`score_asc`, `score_desc`).
   */
  score_id: integer
  /**
   * Last score's total score of current result (`score_asc`, `score_desc`).
   */
  total_score: integer
}

/**
 * Sort option for multiplayer scores index.
 */
export enum MultiplayerScoresSort {
  /**
   * Sort by scores, ascending.
   */
  ScoreAscending = "score_asc",
  /**
   * Sort by scores, descending.
   */
  ScoreDescending = "score_desc"
}

export type NewsPost = {
  author: string
  /**
   * Link to the first image in the document.
   */
  edit_url: string
  /**
   * Link to the first image in the document.
   */
  first_image?: string
  id: integer
  published_at: Timestamp
  /**
   * Filename without the extension, used in URLs.
   */
  slug: string
  title: string
  updated_at: Timestamp
  /**
   * HTML post content.
   */
  content?: string
  /**
   * Navigation metadata.
   */
  navigation?: Navigation
  /**
   * First paragraph of content with HTML markup stripped.
   */
  preview?: string
}

export type Navigation = {
  /**
   * Next post.
   */
  newer?: NewsPost
  /**
   * Previous post.
   */
  older?: NewsPost
}

export type Nomination = {
  beatmapset_id: integer
  rulesets: Ruleset[]
  reset: boolean
  user_id: integer
}

/**
 * Represents a notification object.
 */
export type Notification = {
  id: integer
  /**
   * Name of the event
   */
  name: string
  /**
   * ISO 8601 date
   */
  created_at: Timestamp
  object_type: string
  object_id: integer
  source_user_id?: integer
  is_read: boolean
  /**
   * message_id of last known message (only returned in presence responses)
   */
  details: object
}

/**
 * Available ranking types
 */
export enum RankingType {
  Spotlight = "charts",
  Country = "country",
  Performance = "performance",
  Score = "score"
}

export type Rankings = {
  /**
   * The list of beatmaps in the requested spotlight for the given mode; only available if type is charts
   */
  beatmapsets?: BeatmapsetExtended[]
  /**
   * A cursor
   */
  cursor: Cursor
  /**
   * User statistics for the requested ruleset in order of descending rank.
   *
   * Includes `user`, `user.country`, and `user.cover`.
   *
   * Includes `rank_change_since_30_days` if the ranking type is `performance` with no additional filters applied.
   */
  ranking: UserStatistics[]
  /**
   * Spotlight details; only available if type is charts
   */
  spotlight?: Spotlight
  /**
   * An approximate count of ranks available
   */
  total: integer
}

/**
 * Available rulesets
 */
export enum Ruleset {
  /**
   * osu!catch
   */
  Catch = "fruits",
  /**
   * osu!mania
   */
  Mania = "mania",
  /**
   * osu!standard
   */
  Standard = "osu",
  /**
   * osu!taiko
   */
  Taiko = "taiko"
}

/**
 * The following is the format returned when API v2 version header is 20220705 or higher. Exceptions apply *(f.ex. doesn't apply for legacy match score)*.
 */
export type Score = {
  accuracy: float
  beatmap_id: integer
  best_id?: integer
  build_id?: integer
  /**
   * Only for `solo_score` type
   */
  classic_total_score: integer
  ended_at: Timestamp
  has_replay: boolean
  id: integer
  is_perfect_combo: boolean
  legacy_perfect: boolean
  legacy_score_id?: integer
  legacy_total_score: integer
  max_combo: integer
  maximum_statistics: unknown
  mods: unknown[]
  passed: boolean
  /**
   * Only for multiplayer score
   */
  playlist_item_id: integer
  pp?: float
  /**
   * Whether or not the score may eventually be deleted. Only for `solo_score` type
   */
  preserve: boolean
  /**
   * Only for `solo_score` type
   */
  processed: boolean
  rank: string
  /**
   * Whether or not the score can have pp. Only for `solo_score` type
   */
  ranked: boolean
  /**
   * Only for multiplayer score
   */
  room_id: integer
  ruleset_id: integer
  started_at?: Timestamp
  statistics: unknown
  total_score: integer
  type: string
  user_id: integer
  beatmap?: Beatmap
  beatmapset?: Beatmapset
  current_user_attributes?: integer
  /**
   * Only for legacy match score
   */
  match?: Match
  /**
   * Only for multiplayer score
   */
  position?: integer
  rank_country?: integer
  rank_global?: integer
  /**
   * Scores around the specified score. Only for multiplayer score
   */
  scores_around?: MultiplayerScoresAround
  user?: User
  weight?: float
}

export type Spotlight = {
  /**
   * The end date of the spotlight.
   */
  end_date: Timestamp
  /**
   * The ID of this spotlight.
   */
  id: integer
  /**
   * If the spotlight has different mades specific to each Ruleset.
   */
  mode_specific: boolean
  /**
   * The number of users participating in this spotlight. This is only shown when viewing a single spotlight.
   */
  participant_count?: integer
  /**
   * The name of the spotlight.
   */
  name: string
  /**
   * The starting date of the spotlight.
   */
  start_date: Timestamp
  /**
   * The type of spotlight.
   */
  type: string
}

export type Spotlights = {
  /**
   * An array of spotlights
   */
  spotlights: Spotlight[]
}

/**
 * Timestamp string in ISO 8601 format.
 *
 * `"2020-01-01T00:00:00+00:00"`
 */
export type Timestamp = string

export type UpdateStream = {
  display_name?: string
  id: integer
  is_featured: boolean
  name: string
  latest_build?: Build
  user_count?: integer
}

/**
 * Represents a user.
 */
export type User = {
  /**
   * url of user's avatar
   */
  avatar_url: string
  /**
   * two-letter code representing user's country
   */
  country_code: string
  /**
   * Identifier of the default Group the user belongs to.
   */
  default_group?: string
  /**
   * unique identifier for user
   */
  id: integer
  /**
   * has this account been active in the last x months?
   */
  is_active: boolean
  /**
   * is this a bot account?
   */
  is_bot: boolean
  is_deleted: boolean
  /**
   * is the user currently online? (either on lazer or the new website)
   */
  is_online: boolean
  /**
   * does this user have supporter?
   */
  is_supporter: boolean
  /**
   * last access time. null if the user hides online presence
   */
  last_visit?: Timestamp
  /**
   * whether or not the user allows PM from other than friends
   */
  pm_friends_only: boolean
  /**
   * colour of username/profile highlight, hex code (e.g. #333333)
   */
  profile_colour?: string
  /**
   * user's display name
   */
  username: string
  account_history?: UserAccountHistory[]
  /**
   * @deprecated
   * @use active_tournament_banners instead.
   */
  active_tournament_banner?: UserProfileBanner
  active_tournament_banners?: UserProfileBanner[]
  badges?: UserBadge[]
  beatmap_playcounts_count?: integer
  blocks?: object
  country?: string
  cover?: Covers
  favourite_beatmapset_count?: integer
  follow_user_mapping?: integer[]
  follower_count?: integer
  friends?: integer
  graveyard_beatmapset_count?: integer
  groups?: UserGroup[]
  guest_beatmapset_count?: integer
  is_restricted?: boolean
  kudosu?: UserKudosu
  loved_beatmapset_count?: integer
  mapping_follower_count?: integer
  /**
   * It doesn't exist on osu!api as existing type.
   */
  monthly_playcounts?: unknown[]
  page?: integer
  pending_beatmapset_count?: integer
  previous_usernames?: string[]
  rank_highest?: UserRankHighest
  rank_history?: integer[]
  ranked_beatmapset_count: integer
  replays_watched_counts: integer
  scores_best_count?: integer
  scores_first_count?: integer
  scores_recent_count?: integer
  session_verified?: boolean
  statistics?: UserStatistics
  /**
   * It doesn't exist on osu!api as existing type.
   */
  statistics_rulesets?: unknown[]
  support_level?: integer
  unread_pm_count?: integer
  user_achievements?: object
  user_preferences?: object
}

export type UserKudosu = {
  available: integer
  total: integer
}

export type UserProfileBanner = {
  id: integer
  tournament_id: integer
  image?: string
  "image@2x"?: string
}

export enum UserProfilePage {
  Me = "me",
  RecentActivity = "recent_activity",
  Beatmaps = "beatmaps",
  Historical = "historical",
  Kudosu = "kudosu",
  TopRanks = "top_ranks",
  Medals = "medals"
}

export type UserRankHighest = {
  rank: integer
  updated_at: Timestamp
}

export type UserAccountHistory = {
  description: string
  id: integer
  /**
   * In seconds.
   */
  length: integer
  permanent: boolean
  timestamp: Timestamp
  type: "note" | "restriction" | "silence"
}

export type UserBadge = {
  awarded_at: Timestamp
  description: string
  "image@2x_url": string
  image_url: string
  url: string
}

export type UserExtended = User & {
  /**
   * url of profile cover.
   *
   * @deprecated
   * @use cover.url instead.
   */
  cover_url: string
  discord?: string
  /**
   * whether or not ever being a supporter in the past
   */
  has_supported: boolean
  interests?: string
  join_date: Timestamp
  location?: string
  /**
   * maximum number of users allowed to be blocked
   */
  max_blocks: integer
  /**
   * maximum number of friends allowed to be added
   */
  max_friends: integer
  occupation?: string
  playmode: Ruleset
  /**
   * Device choices of the user.
   */
  playstyle: string[]
  /**
   * Number of forum posts
   */
  post_count: integer
  profile_hue?: integer
  /**
   * ordered array of sections in user profile page
   */
  profile_order: UserProfilePage[]
  /**
   * user-specific title
   */
  title?: string
  title_url?: string
  twitter?: string
  website?: string
}

/**
 * Describes a {@link Group} membership of a {@link User}.
 * It contains all of the attributes of the {@link Group}, in addition to what is listed here.
 */
export type UserGroup = Group & {
  /**
   * Rulesets associated with this membership (`null` if `has_playmodes` is unset).
   */
  playmodes?: string[]
}

/**
 * A record indicating a {@link User} was silenced.
 */
export type UserSilence = {
  /**
   * id of this object.
   */
  id: integer
  /**
   * id of the User that was silenced
   */
  user_id: integer
}

/**
 * A summary of various gameplay statistics for a {@link User}. Specific to a {@link Ruleset}
 */
export type UserStatistics = {
  count_100: integer
  count_300: integer
  count_50: integer
  count_miss: integer
  /**
   * Current country rank according to pp.
   */
  country_rank?: integer
  grade_counts: {
    /**
     * Number of A ranked scores.
     */
    a: integer
    /**
     * Number of S ranked scores.
     */
    s: integer
    /**
     * Number of Silver S ranked scores.
     */
    sh: integer
    /**
     * Number of SS ranked scores.
     */
    ss: integer
    /**
     * Number of Silver SS ranked scores.
     */
    ssh: integer
  }
  /**
   * Hit accuracy percentage
   */
  hit_accuracy: float
  /**
   * Is actively ranked
   */
  is_ranked: boolean
  level: {
    /**
     * Current level.
     */
    current: integer
    /**
     * Progress to next level.
     */
    progress: float
  }
  /**
   * Highest maximum combo.
   */
  maximum_combo: integer
  /**
   * Number of maps played.
   */
  play_count: integer
  /**
   * Cumulative time played.
   */
  play_time: integer
  /**
   * Performance points
   */
  pp: float
  /**
   * Experimental (lazer) performance points
   */
  pp_exp: float
  /**
   * Current rank according to pp.
   */
  global_rank?: integer
  /**
   * Current rank according to experimental (lazer) pp.
   */
  global_rank_exp?: integer
  /**
   * Current ranked score.
   */
  ranked_score: integer
  /**
   * Number of replays watched by other users.
   */
  replays_watched_by_others: integer
  /**
   * Total number of hits.
   */
  total_hits: integer
  /**
   * Total score.
   */
  total_score: integer
  /**
   * Difference between current rank and rank 30 days ago, according to pp.
   */
  rank_change_since_30_days?: integer
  user?: User
}

/**
 * Represents a wiki article
 */
export type WikiPage = {
  /**
   * All available locales for the article.
   */
  available_locales: string[]
  /**
   * The layout type for the page.
   */
  layout: string
  /**
   * All lowercase BCP 47 language tag.
   */
  locale: string
  /**
   * Markdown content.
   */
  markdown: string
  /**
   * Path of the article.
   */
  path: string
  /**
   * The article's subtitle.
   */
  subtitle?: string
  /**
   * Associated tags for the article.
   */
  tags: string[]
  /**
   * The article's title.
   */
  title: string
}
