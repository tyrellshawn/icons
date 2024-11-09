import { AlarmClockIcon } from '@/icons/alarm-clock';
import { AlignCenterIcon } from '@/icons/align-center';
import { AlignHorizontalIcon } from '@/icons/align-horizontal';
import { AlignVerticalIcon } from '@/icons/align-vertical';
import { ArchiveIcon } from '@/icons/archive';
import { ArrowLeftIcon } from '@/icons/arrow-left';
import { ArrowRightIcon } from '@/icons/arrow-right';
import { AtSignIcon } from '@/icons/at-sign';
import { AttachFileIcon } from '@/icons/attach-file';
import { BadgePercentIcon } from '@/icons/badge-percent';
import { BellIcon } from '@/icons/bell';
import { BoldIcon } from '@/icons/bold';
import { BoneIcon } from '@/icons/bone';
import { CalendarCogIcon } from '@/icons/calendar-cog';
import { ChartPieIcon } from '@/icons/chart-pie';
import { CircleCheckIcon } from '@/icons/circle-check';
import { CircleDollarSignIcon } from '@/icons/circle-dollar-sign';
import { ClockIcon } from '@/icons/clock';
import { CopyIcon } from '@/icons/copy';
import { CursorClickIcon } from '@/icons/cursor-click';
import { DeleteIcon } from '@/icons/delete';
import { DownloadIcon } from '@/icons/download';
import { DownvoteIcon } from '@/icons/downvote';
import { SquarePenIcon } from '@/icons/square-pen';
import { ExpandIcon } from '@/icons/expand';
import { FilePenLineIcon } from '@/icons/file-pen-line';
import { FileStackIcon } from '@/icons/file-stack';
import { FingerprintIcon } from '@/icons/fingerprint';
import { FrameIcon } from '@/icons/frame';
import { GaugeIcon } from '@/icons/gauge';
import { GitPullRequestIcon } from '@/icons/git-pull-request';
import { GripIcon } from '@/icons/grip';
import { HandCoinsIcon } from '@/icons/hand-coins';
import { HomeIcon } from '@/icons/home';
import { ItalicIcon } from '@/icons/italic';
import { LanguagesIcon } from '@/icons/languages';
import { LayersIcon } from '@/icons/layers';
import { LinkIcon } from '@/icons/link';
import { MenuIcon } from '@/icons/menu';
import { PartyPopperIcon } from '@/icons/party-popper';
import { PenToolIcon } from '@/icons/pen-tool';
import { RefreshIcon } from '@/icons/refresh';
import { RouteIcon } from '@/icons/route';
import { ScanTextIcon } from '@/icons/scan-text';
import { SettingsIcon } from '@/icons/settings';
import { SettingsGearIcon } from '@/icons/settings-gear';
import { SunIcon } from '@/icons/sun';
import { UnderlineIcon } from '@/icons/underline';
import { UndoIcon } from '@/icons/undo';
import { ConnectIcon } from '@/icons/connect';
import { UpvoteIcon } from '@/icons/upvote';
import { UsersIcon } from '@/icons/users';
import { VolumeIcon } from '@/icons/volume';
import { CartIcon } from '@/icons/cart';
import { StethoscopeIcon } from '@/icons/stethoscope';
import { EarthIcon } from '@/icons/earth';
import { WorkflowIcon } from '@/icons/workflow';
import { LogoutIcon } from '@/icons/logout';
import { CircleHelpIcon } from '@/icons/circle-help';
import { UserIcon } from '@/icons/user';
import { AudioLinesIcon } from '@/icons/audio-lines';
import { EyeOffIcon } from '@/icons/eye-off';
import { SquareStackIcon } from '@/icons/square-stack';
import { BadgeAlertIcon } from '@/icons/badge-alert';
import { MessageCircleIcon } from '@/icons/message-circle';
import { MessageCircleMoreIcon } from '@/icons/message-circle-more';
import { SearchIcon } from '@/icons/search';
import { ShieldCheckIcon } from '@/icons/shield-check';
import { TimerIcon } from '@/icons/timer';
import { BluetoothSearchingIcon } from '@/icons/bluetooth-searching';
import { BluetoothConnectedIcon } from '@/icons/bluetooth-connected';
import { BluetoothOffIcon } from '@/icons/bluetooth-off';
import { FlaskIcon } from '@/icons/flask';
import { SyringeIcon } from '@/icons/syringe';
import { CompassIcon } from '@/icons/compass';
import { TrendingDownIcon } from '@/icons/trending-down';
import { TrendingUpIcon } from '@/icons/trending-up';
import { ChevronsUpDownIcon } from '@/icons/chevrons-up-down';
import { ChevronsDownUpIcon } from '@/icons/chevrons-down-up';
import { ChevronsLeftRightIcon } from '@/icons/chevrons-left-right';
import { ChevronsRightLeftIcon } from '@/icons/chevrons-right-left';

type IconListItem = {
  name: string;
  icon: React.ElementType;
  keywords: string[];
};

const ICON_LIST: IconListItem[] = [
  {
    name: 'search',
    icon: SearchIcon,
    keywords: ['find', 'scan', 'magnifier', 'magnifying glass'],
  },
  {
    name: 'cart',
    icon: CartIcon,
    keywords: [
      'trolley',
      'cart',
      'basket',
      'e-commerce',
      'store',
      'purchase',
      'products',
      'items',
      'ingredients',
    ],
  },
  {
    name: 'stethoscope',
    icon: StethoscopeIcon,
    keywords: ['phonendoscope', 'medical', 'heart', 'lungs', 'sound'],
  },
  {
    name: 'circle-check',
    icon: CircleCheckIcon,
    keywords: ['done', 'todo', 'tick', 'complete', 'task'],
  },
  {
    name: 'earth',
    icon: EarthIcon,
    keywords: ['world', 'browser', 'language', 'translate', 'globe'],
  },
  {
    name: 'workflow',
    icon: WorkflowIcon,
    keywords: [
      'action',
      'continuous integration',
      'ci',
      'automation',
      'devops',
      'network',
      'node',
      'connection',
    ],
  },
  {
    name: 'logout',
    icon: LogoutIcon,
    keywords: ['sign out', 'arrow', 'exit', 'auth'],
  },
  {
    name: 'circle-help',
    icon: CircleHelpIcon,
    keywords: ['question mark'],
  },
  {
    name: 'user',
    icon: UserIcon,
    keywords: ['person', 'account', 'contact'],
  },
  {
    name: 'audio-lines',
    icon: AudioLinesIcon,
    keywords: [
      'graphic equaliser',
      'sound',
      'noise',
      'listen',
      'hearing',
      'hertz',
      'frequency',
      'wavelength',
      'vibrate',
      'sine',
      'synthesizer',
      'synthesiser',
      'levels',
      'track',
      'music',
      'playback',
      'radio',
      'broadcast',
      'airwaves',
      'voice',
      'vocals',
      'singer',
      'song',
    ],
  },
  {
    name: 'eye-off',
    icon: EyeOffIcon,
    keywords: [
      'view',
      'watch',
      'see',
      'hide',
      'conceal',
      'mask',
      'hidden',
      'visibility',
      'vision',
    ],
  },
  {
    name: 'square-stack',
    icon: SquareStackIcon,
    keywords: [
      'versions',
      'clone',
      'copy',
      'duplicate',
      'multiple',
      'revisions',
      'version control',
      'backup',
      'history',
    ],
  },
  {
    name: 'badge-alert',
    icon: BadgeAlertIcon,
    keywords: [
      'check',
      'verified',
      'unverified',
      'security',
      'safety',
      'issue',
    ],
  },
  {
    name: 'message-circle',
    icon: MessageCircleIcon,
    keywords: [
      'comment',
      'chat',
      'conversation',
      'dialog',
      'feedback',
      'speech bubble',
    ],
  },
  {
    name: 'message-circle-more',
    icon: MessageCircleMoreIcon,
    keywords: [
      'comment',
      'chat',
      'conversation',
      'dialog',
      'feedback',
      'speech bubble',
      'typing',
      'writing',
      'responding',
      'ellipsis',
      'etc',
    ],
  },
  {
    name: 'home',
    icon: HomeIcon,
    keywords: ['home', 'living', 'building', 'residence', 'architecture'],
  },
  {
    name: 'arrow-left',
    icon: ArrowLeftIcon,
    keywords: ['previous', 'back', 'direction', 'west', '<-'],
  },
  {
    name: 'arrow-right',
    icon: ArrowRightIcon,
    keywords: ['forward', 'next', 'direction', 'east', '->'],
  },
  {
    name: 'expand',
    icon: ExpandIcon,
    keywords: ['scale', 'fullscreen'],
  },
  {
    name: 'route',
    icon: RouteIcon,
    keywords: ['path', 'journey', 'planner', 'points', 'stops', 'stations'],
  },
  {
    name: 'refresh',
    icon: RefreshIcon,
    keywords: [
      'arrows',
      'rotate',
      'reload',
      'rerun',
      'synchronise',
      'synchronize',
      'circular',
      'cycle',
    ],
  },
  { name: 'undo', icon: UndoIcon, keywords: ['redo', 'rerun', 'history'] },
  {
    name: 'download',
    icon: DownloadIcon,
    keywords: ['import', 'export', 'save'],
  },
  {
    name: 'square-pen',
    icon: SquarePenIcon,
    keywords: [
      'pencil',
      'change',
      'create',
      'draw',
      'sketch',
      'draft',
      'writer',
      'writing',
      'biro',
      'ink',
      'marker',
      'felt tip',
      'stationery',
      'artist',
    ],
  },
  {
    name: 'delete',
    icon: DeleteIcon,
    keywords: ['garbage', 'delete', 'remove', 'bin'],
  },
  {
    name: 'settings',
    icon: SettingsIcon,
    keywords: ['settings', 'filters', 'controls'],
  },
  {
    name: 'settings-gear',
    icon: SettingsGearIcon,
    keywords: ['cog', 'edit', 'gear', 'preferences'],
  },
  {
    name: 'calendar-cog',
    icon: CalendarCogIcon,
    keywords: [
      'date',
      'day',
      'month',
      'year',
      'events',
      'settings',
      'gear',
      'cog',
    ],
  },
  {
    name: 'cursor-click',
    icon: CursorClickIcon,
    keywords: ['click', 'select'],
  },
  {
    name: 'menu',
    icon: MenuIcon,
    keywords: ['bars', 'navigation', 'hamburger', 'options'],
  },
  {
    name: 'clock',
    icon: ClockIcon,
    keywords: ['time', 'watch', 'alarm'],
  },
  {
    name: 'file-stack',
    icon: FileStackIcon,
    keywords: [
      'versions',
      'multiple',
      'copy',
      'documents',
      'revisions',
      'version control',
      'history',
    ],
  },
  {
    name: 'file-pen-line',
    icon: FilePenLineIcon,
    keywords: ['edit'],
  },
  {
    name: 'archive',
    icon: ArchiveIcon,
    keywords: ['index', 'backup', 'box', 'storage', 'records'],
  },
  {
    name: 'copy',
    icon: CopyIcon,
    keywords: ['clone', 'duplicate', 'multiple'],
  },
  {
    name: 'attach-file',
    icon: AttachFileIcon,
    keywords: ['attachment', 'file'],
  },
  { name: 'alarm-clock', icon: AlarmClockIcon, keywords: ['morning'] },
  { name: 'bold', icon: BoldIcon, keywords: ['text', 'strong', 'format'] },
  {
    name: 'italic',
    icon: ItalicIcon,
    keywords: ['oblique', 'text', 'format'],
  },
  {
    name: 'underline',
    icon: UnderlineIcon,
    keywords: ['text', 'format'],
  },
  {
    name: 'scan-text',
    icon: ScanTextIcon,
    keywords: ['recognition', 'read', 'translate', 'copy', 'lines'],
  },
  {
    name: 'languages',
    icon: LanguagesIcon,
    keywords: ['translate'],
  },
  {
    name: 'at-sign',
    icon: AtSignIcon,
    keywords: ['mention', 'at', 'email', 'message', '@'],
  },
  {
    name: 'bell',
    icon: BellIcon,
    keywords: ['alarm', 'notification', 'sound', 'reminder'],
  },
  {
    name: 'users',
    icon: UsersIcon,
    keywords: ['group', 'people'],
  },
  {
    name: 'upvote',
    icon: UpvoteIcon,
    keywords: ['like', 'good', 'emotion'],
  },
  {
    name: 'downvote',
    icon: DownvoteIcon,
    keywords: ['dislike', 'bad', 'emotion'],
  },
  {
    name: 'circle-dollar-sign',
    icon: CircleDollarSignIcon,
    keywords: ['monetization', 'marketing', 'currency', 'money', 'payment'],
  },
  {
    name: 'hand-coins',
    icon: HandCoinsIcon,
    keywords: [
      'savings',
      'banking',
      'money',
      'finance',
      'offers',
      'mortgage',
      'payment',
      'received',
      'wage',
      'payroll',
      'allowance',
      'pocket money',
      'handout',
      'pennies',
    ],
  },
  {
    name: 'badge-percent',
    icon: BadgePercentIcon,
    keywords: [
      'verified',
      'unverified',
      'sale',
      'discount',
      'offer',
      'marketing',
      'sticker',
      'price tag',
    ],
  },
  {
    name: 'chart-pie',
    icon: ChartPieIcon,
    keywords: ['statistics', 'analytics', 'diagram', 'presentation'],
  },
  {
    name: 'gauge',
    icon: GaugeIcon,
    keywords: [
      'dashboard',
      'dial',
      'meter',
      'speed',
      'pressure',
      'measure',
      'level',
    ],
  },
  {
    name: 'pen-tool',
    icon: PenToolIcon,
    keywords: ['vector', 'drawing', 'path'],
  },
  {
    name: 'fingerprint',
    icon: FingerprintIcon,
    keywords: ['2fa', 'authentication', 'biometric', 'identity', 'security'],
  },
  {
    name: 'link',
    icon: LinkIcon,
    keywords: ['chain', 'url'],
  },
  {
    name: 'layers',
    icon: LayersIcon,
    keywords: [
      'stack',
      'pile',
      'pages',
      'sheets',
      'paperwork',
      'copies',
      'copy',
    ],
  },
  {
    name: 'grip',
    icon: GripIcon,
    keywords: ['grab', 'dots', 'handle', 'move', 'drag'],
  },
  {
    name: 'git-pull-request',
    icon: GitPullRequestIcon,
    keywords: ['code', 'version control', 'open'],
  },
  {
    name: 'connect',
    icon: ConnectIcon,
    keywords: [
      'electricity',
      'energy',
      'electronics',
      'socket',
      'outlet',
      'disconnect',
    ],
  },
  {
    name: 'volume',
    icon: VolumeIcon,
    keywords: ['music', 'sound', 'mute', 'speaker'],
  },
  {
    name: 'sun',
    icon: SunIcon,
    keywords: ['brightness', 'weather', 'light', 'summer'],
  },
  {
    name: 'party-popper',
    icon: PartyPopperIcon,
    keywords: [
      'emoji',
      'congratulations',
      'celebration',
      'party',
      'tada',
      '🎉',
      '🎊',
      'excitement',
      'exciting',
      'excites',
      'confetti',
    ],
  },
  {
    name: 'frame',
    icon: FrameIcon,
    keywords: ['logo', 'design', 'tool'],
  },
  {
    name: 'bone',
    icon: BoneIcon,
    keywords: ['health', 'skeleton', 'skull', 'death', 'pets', 'dog'],
  },
  {
    name: 'align-center',
    icon: AlignCenterIcon,
    keywords: ['text', 'alignment', 'center'],
  },
  {
    name: 'align-vertical',
    icon: AlignVerticalIcon,
    keywords: ['center', 'items', 'flex', 'justify', 'distribute', 'between'],
  },
  {
    name: 'align-horizontal',
    icon: AlignHorizontalIcon,
    keywords: ['center', 'items', 'flex', 'justify', 'distribute', 'between'],
  },
  {
    name: 'compass',
    icon: CompassIcon,
    keywords: [
      'direction',
      'navigation',
      'north',
      'south',
      'east',
      'west',
      'compass',
    ],
  },
  {
    name: 'shield-check',
    icon: ShieldCheckIcon,
    keywords: ['security', 'verified', 'safe', 'protection', 'secure'],
  },
  {
    name: 'trending-down',
    icon: TrendingDownIcon,
    keywords: ['down', 'trend', 'graph', 'downward', 'decrease', 'statistics'],
  },
  {
    name: 'trending-up',
    icon: TrendingUpIcon,
    keywords: ['up', 'trend', 'graph', 'upward', 'increase', 'statistics'],
  },
  {
    name: 'timer',
    icon: TimerIcon,
    keywords: ['time', 'watch', 'alarm', 'stopwatch', 'stopwatch'],
  },
  {
    name: 'bluetooth-searching',
    icon: BluetoothSearchingIcon,
    keywords: ['tool', 'connection', 'network'],
  },
  {
    name: 'bluetooth-connected',
    icon: BluetoothConnectedIcon,
    keywords: ['tool', 'connection', 'network'],
  },
  {
    name: 'bluetooth-off',
    icon: BluetoothOffIcon,
    keywords: ['tool', 'connection', 'network'],
  },
  {
    name: 'flask',
    icon: FlaskIcon,
    keywords: [
      'beaker',
      'erlenmeyer',
      'lab',
      'chemistry',
      'experiment',
      'test',
    ],
  },
  {
    name: 'syringe',
    icon: SyringeIcon,
    keywords: [
      'medicine',
      'medical',
      'needle',
      'pump',
      'plunger',
      'nozzle',
      'blood',
    ],
  },
  {
    name: 'chevrons-up-down',
    icon: ChevronsUpDownIcon,
    keywords: ['expand', 'unfold', 'vertical'],
  },
  {
    name: 'chevrons-down-up',
    icon: ChevronsDownUpIcon,
    keywords: ['collapse', 'fold', 'vertical'],
  },
  {
    name: 'chevrons-left-right',
    icon: ChevronsLeftRightIcon,
    keywords: ['expand', 'unfold', 'horizontal'],
  },
  {
    name: 'chevrons-right-left',
    icon: ChevronsRightLeftIcon,
    keywords: ['collapse', 'fold', 'horizontal'],
  },
];

export { ICON_LIST };
