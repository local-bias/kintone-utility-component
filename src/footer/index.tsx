import React, { FC, useCallback, ChangeEventHandler } from 'react';
import styled from '@emotion/styled';
import { Button, CircularProgress } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

import ImportButton from './import-button';
import ExportButton from './export-button';
import ResetButton from './reset-button';

type ContainerProps = {
  loading?: boolean;
  onSaveButtonClick: () => void;
  onBackButtonClick: () => void;
  onImportButtonClick?: ChangeEventHandler<HTMLInputElement>;
  onExportButtonClick?: () => void;
  reset?: () => void;
};

type Props = {
  loading: boolean;
  onSaveButtonClick: () => void;
  onBackButtonClick: () => void;
  onImportButtonClick?: ChangeEventHandler<HTMLInputElement>;
  onExportButtonClick?: () => void;
  reset?: () => void;
};

const Component: FC<Props & { className?: string }> = (props) => (
  <div className={props.className}>
    <div>
      <Button
        variant='contained'
        color='primary'
        disabled={props.loading}
        onClick={props.onSaveButtonClick}
        startIcon={props.loading ? <CircularProgress color='inherit' size={20} /> : <SaveIcon />}
      >
        設定を保存
      </Button>
      <Button
        variant='contained'
        color='inherit'
        disabled={props.loading}
        onClick={props.onBackButtonClick}
        startIcon={
          props.loading ? (
            <CircularProgress color='inherit' size={20} />
          ) : (
            <SettingsBackupRestoreIcon />
          )
        }
      >
        プラグイン一覧へ戻る
      </Button>
    </div>
    <div>
      {props.onExportButtonClick && (
        <ExportButton onExportButtonClick={props.onExportButtonClick} loading={props.loading} />
      )}
      {props.onImportButtonClick && (
        <ImportButton onImportButtonClick={props.onImportButtonClick} loading={props.loading} />
      )}
      {props.reset && <ResetButton reset={props.reset} />}
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  grid-area: footer;

  display: flex;
  justify-content: space-between;

  position: sticky;
  bottom: 15px;
  margin-top: 20px;
  background-color: #fff;
  border-top: 1px solid #eee;
  z-index: 30;

  button {
    margin: 8px;
  }
`;

const Container: FC<ContainerProps> = (props) => {
  const {
    onBackButtonClick = useCallback(() => history.back(), []),
    loading = false,
    onSaveButtonClick = () => null,
    onImportButtonClick,
    onExportButtonClick,
    reset,
  } = props ?? {};

  return (
    <StyledComponent
      {...{
        loading,
        onSaveButtonClick,
        onBackButtonClick,
        onImportButtonClick,
        onExportButtonClick,
        reset,
      }}
    />
  );
};

export const PluginFooter = Container;
